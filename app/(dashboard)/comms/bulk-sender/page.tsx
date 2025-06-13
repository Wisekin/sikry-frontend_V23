"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import {
    Upload, FileText, Users, Mail, Send, Calendar, Eye, MousePointer, ShieldCheck, Plus, Search, Star, TrendingUp, Filter,
    Save, Clock, Bold, Italic, Underline, Link2, List, Tags, Info, MessageCircle, GitCompareArrows, BrainCircuit, Sparkles, UserCheck, MessageSquareQuote,
    X, ChevronDown,
    MailCheck
} from "lucide-react";
import { useState, useMemo, useCallback } from "react"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { motion } from "framer-motion"
import Image from "next/image";
import { AIAssistant } from "@/components/ai/AIAssistant"


// --- MOCK DATA FOR TEMPLATES ---
const emailTemplates = [
    { id: 1, name: "Welcome Series - Day 1", category: "Welcome", openRate: "62.3%", clickRate: "14.8%", content: "Hello {first_name},\n\nWelcome to SIKRY! We're thrilled to have you on board. Here's a quick guide to get you started...\n\nBest,\nThe SIKRY Team" },
    { id: 2, name: "Product Launch Announcement", category: "Promotion", openRate: "35.1%", clickRate: "8.2%", content: "Hello {first_name},\n\nBig news! We're excited to announce the launch of our new feature. It's designed to help {company} achieve even greater results by...\n\nExplore it now,\nThe SIKRY Team" },
    { id: 3, name: "Webinar Invitation", category: "Event", openRate: "41.7%", clickRate: "11.5%", content: "Hi {first_name},\n\nJoin our exclusive webinar next week where we'll discuss the future of enterprise AI. Seats are limited, so reserve your spot today!\n\nSee you there,\nThe SIKRY Team" },
    { id: 4, name: "Re-engagement Campaign", category: "Follow-up", openRate: "28.5%", clickRate: "5.1%", content: "Hi {first_name},\n\nWe haven't seen you in a while. We've made a lot of improvements and wanted to share what's new at SIKRY. We think you'll love...\n\nCome see what's new,\nThe SIKRY Team" },
    { id: 5, name: "Aggressive Follow-Up", category: "Follow-up", openRate: "55.2%", clickRate: "12.8%", content: "Hi {first_name},\n\nJust following up on my previous message regarding your interest in our solutions. Are you free for a quick 15-minute chat this week?\n\nBest regards,\nThe SIKRY Team" },
];

const linkedinTemplates = [
    { id: 1, name: "Connection Follow-Up", category: "Networking", responseRate: "38.2%", content: "Hi {firstName}, thanks for connecting! I noticed we both work in the AI space. Would love to hear about what you're working on at {companyName}." },
    { id: 2, name: "Thought Leadership Share", category: "Engagement", responseRate: "27.5%", content: "Hi {firstName}, I came across your recent post about {topic} - great insights! At SIKRY, we're exploring similar challenges. Would be open to exchanging ideas sometime?" },
    { id: 3, name: "Job Opportunity Outreach", category: "Recruitment", responseRate: "19.8%", content: "Hi {firstName}, your profile caught my attention. We're looking for someone with your skills at SIKRY. Would you be open to a quick chat about potential opportunities?" },
];

const smsTemplates = [
    { id: 1, name: "Appointment Reminder", category: "Notification", openRate: "94.7%", content: "Hi {firstName}, this is a reminder about your appointment with SIKRY tomorrow at {time}. Reply YES to confirm or RESCHEDULE to change." },
    { id: 2, name: "Limited Time Offer", category: "Promotion", openRate: "88.3%", content: "{firstName}, exclusive offer just for you: Get 20% off SIKRY Pro today! Use code SAVE20. Offer expires tonight. {link}" },
    { id: 3, name: "Event Reminder", category: "Notification", openRate: "91.2%", content: "Hi {firstName}, your webinar with SIKRY starts in 1 hour! Join here: {link}. Reply STOP to opt out." },
];

// Helper function to count personalization tags
const countTags = (text: string) => {
    const regex = /{\w+}/g;
    const matches = text.match(regex) || [];
    return new Set(matches).size; // Count unique tags
};

// Helper function for simple readability
const calculateReadability = (text: string) => {
    if (!text) return { score: 'N/A', feedback: 'Start typing to see analysis.' };
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const words = text.split(/\s+/).filter(Boolean).length;
    if (words < 10) return { score: 'Too Short', feedback: 'Not enough text to analyze.' };
    const averageWords = words / sentences;
    if (averageWords > 25) return { score: 'Hard', feedback: 'Sentences are too long. Aim for brevity.' };
    if (averageWords > 15) return { score: 'Medium', feedback: 'Good, but could be slightly simpler.' };
    return { score: 'Easy', feedback: 'Great! Your message is clear and concise.' };
};


export default function BulkSenderPage() {
    const [selectedTab, setSelectedTab] = useState('email');
    const [recipientsCount, setRecipientsCount] = useState(0);

    // State for message content
    const [emailSubject, setEmailSubject] = useState("Unlocking new possibilities for your team");
    const [emailBody, setEmailBody] = useState(`Hello {first_name},\n\nWe noticed your interest in enterprise solutions at {company} and thought you might appreciate our latest whitepaper on AI-driven analytics.\n\nIt covers key strategies for boosting productivity.\n\nBest,\nThe SIKRY Team`);
    const [linkedinMessage, setLinkedinMessage] = useState(`Hi {firstName}, saw your recent post on industry trends and it really resonated. At {companyName}, we're exploring similar challenges. Would be great to connect and share insights.`);
    const [smsMessage, setSmsMessage] = useState(`Hi {firstName}! Quick update from SIKRY: Your requested demo is confirmed. Details to follow. Reply STOP to opt out.`);
    const [isAbTesting, setIsAbTesting] = useState(false);
    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    // Message body color options
    const [emailBodyColor, setEmailBodyColor] = useState<ColorTheme>('light');
    const [linkedinBodyColor, setLinkedinBodyColor] = useState<ColorTheme>('light');
    const [smsBodyColor, setSmsBodyColor] = useState<ColorTheme>('light');

    // Delivery time state
    const [deliveryOption, setDeliveryOption] = useState('optimal');
    const [scheduledTime, setScheduledTime] = useState('');
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

    // Color map for message body backgrounds
    type ColorTheme = 'light' | 'blue' | 'dark' | 'purple' | 'green' | 'warm';
    type ColorMapType = {
        [key in ColorTheme]: {
            bg: string;
            text: string;
            name: string;
            buttonBg: string;
            buttonText: string;
        };
    };

    const colorMap: ColorMapType = {
        light: { 
            bg: 'bg-white', 
            text: 'text-gray-800', 
            name: 'Light',
            buttonBg: 'bg-white',
            buttonText: 'text-brand-primary'
        },
        blue: { 
            bg: 'bg-blue-50', 
            text: 'text-gray-800', 
            name: 'Blue',
            buttonBg: 'bg-white',
            buttonText: 'text-brand-primary'
        },
        dark: { 
            bg: 'bg-gray-800', 
            text: 'text-white', 
            name: 'Dark',
            buttonBg: 'bg-gray-700',
            buttonText: 'text-white'
        },
        purple: { 
            bg: 'bg-purple-50', 
            text: 'text-gray-800', 
            name: 'Purple',
            buttonBg: 'bg-white',
            buttonText: 'text-brand-primary'
        },
        green: { 
            bg: 'bg-emerald-50', 
            text: 'text-gray-800', 
            name: 'Green',
            buttonBg: 'bg-white',
            buttonText: 'text-brand-primary'
        },
        warm: { 
            bg: 'bg-orange-50', 
            text: 'text-gray-800', 
            name: 'Warm',
            buttonBg: 'bg-white',
            buttonText: 'text-brand-primary'
        }
    };

    // Smarter feature calculations
    const personalizationCount = useMemo(() => countTags(`${emailBody} ${emailSubject} ${linkedinMessage} ${smsMessage}`), [emailBody, emailSubject, linkedinMessage, smsMessage]);
    const readability = useMemo(() => calculateReadability(emailBody), [emailBody]);


    const handleSmsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setSmsMessage(text);
    };

    const smsInfo = useMemo(() => {
        const charCount = smsMessage.length;
        const isGSM7 = /^[\w\s@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ!"#¤%&'()*+,\-./:;<=>?¡A-Z_a-z~]*$/.test(smsMessage);
        const singleLimit = isGSM7 ? 160 : 70;
        const multipartLimit = isGSM7 ? 153 : 67;

        if (charCount <= singleLimit) {
            return { count: charCount, limit: singleLimit, segments: 1 };
        }
        const segments = Math.ceil(charCount / multipartLimit);
        return { count: charCount, limit: singleLimit, segments };
    }, [smsMessage]);
    
    const applyTemplate = (template: { name: string; content: string }) => {
        if (selectedTab === 'email') {
            setEmailSubject(template.name);
            setEmailBody(template.content);
        } else if (selectedTab === 'linkedin') {
            setLinkedinMessage(template.content);
        } else if (selectedTab === 'sms') {
            setSmsMessage(template.content);
        }
        setIsTemplateModalOpen(false);
    };

    const getTemplates = () => {
        switch (selectedTab) {
            case 'email': return emailTemplates;
            case 'linkedin': return linkedinTemplates;
            case 'sms': return smsTemplates;
            default: return emailTemplates;
        }
    };

    const renderSmsSegments = () => {
        const { count, limit, segments } = smsInfo;
        const totalChars = segments > 1 ? segments * (limit === 160 ? 153 : 67) : limit;
        return (
            <div className="text-sm text-brand-text-secondary flex justify-between items-center pt-1">
                <span>Characters: <span className="font-medium text-brand-text-primary">{count} / {totalChars}</span></span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-text-primary">
                    {segments} SMS Segment{segments > 1 ? 's' : ''}
                </span>
            </div>
        );
    };
    
    // Simulate file upload
    const handleFileUpload = () => {
        setRecipientsCount(247);
    };

    // Color picker component
    interface ColorPickerProps {
        currentColor: ColorTheme;
        onChange: (color: ColorTheme) => void;
    }

    const ColorPicker: React.FC<ColorPickerProps> = ({ currentColor, onChange }) => (
        <div className="flex items-center space-x-2 ml-4">
            <span className="text-xs text-brand-secondary">Theme:</span>
            <div className="flex space-x-1">
                <button 
                    onClick={() => onChange('light')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'light' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#ffffff' }}
                    title="Light"
                />
                <button 
                    onClick={() => onChange('blue')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'blue' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#dbeafe' }}
                    title="Blue"
                />
                <button 
                    onClick={() => onChange('dark')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'dark' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#1f2937' }}
                    title="Dark"
                />
                <button 
                    onClick={() => onChange('purple')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'purple' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#f3e8ff' }}
                    title="Purple"
                />
                <button 
                    onClick={() => onChange('green')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'green' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#d1fae5' }}
                    title="Green"
                />
                <button 
                    onClick={() => onChange('warm')} 
                    className={`w-6 h-6 rounded-full border ${currentColor === 'warm' ? 'ring-2 ring-offset-2 ring-brand-primary' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#ffedd5' }}
                    title="Warm"
                />
            </div>
        </div>
    );

    return (
        <div className="container mx-auto py-8 space-y-8 bg-[#f7f9fc]">
            {/* Header */}
            <div className="pb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-brand-primary">Message Center</h1>
                        <p className="text-brand-secondary mt-1">Design, analyze, and send your campaigns from one place.</p>
                    </div>
                    <Button className="bg-brand-primary hover:bg-opacity-90 text-white">
                        <Send className="h-4 w-4 mr-2" /> New Campaign
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-brand-primary/5 p-1 h-auto rounded-lg">
                        <TabsTrigger value="email" className="data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-md rounded-md py-2.5 flex items-center justify-center gap-2 font-semibold text-brand-secondary">
                            <Mail className="h-5 w-5" /> Email
                        </TabsTrigger>
                        <TabsTrigger value="linkedin" className="data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-md rounded-md py-2.5 flex items-center justify-center gap-2 font-semibold text-brand-secondary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            LinkedIn
                        </TabsTrigger>
                        <TabsTrigger value="sms" className="data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-md rounded-md py-2.5 flex items-center justify-center gap-2 font-semibold text-brand-secondary">
                            <MessageCircle className="h-5 w-5" /> SMS
                        </TabsTrigger>
                    </TabsList>
                    
                    {/* EMAIL TAB */}
                    <TabsContent value="email" className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-3 space-y-8">
                                <Card className={`border-brand-primary/20 shadow-sm transition-all duration-300 ${colorMap[emailBodyColor].bg}`}>
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <CardTitle className={`text-xl ${colorMap[emailBodyColor].text}`}>Email Composer</CardTitle>
                                            <div className="flex items-center">
                                                <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
                                                    <DialogTrigger asChild>
                                                        <Button 
                                                            variant="outline" 
                                                            className={`border-brand-primary/30 hover:bg-brand-primary/5 ${colorMap[emailBodyColor].buttonBg} ${colorMap[emailBodyColor].buttonText} shadow-sm hover:shadow-md transition-all duration-200`}
                                                        >
                                                            <Star className="h-4 w-4 mr-2" /> Choose from Template
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-3xl">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-2xl text-brand-primary">Smart Template Library</DialogTitle>
                                                            <DialogDescription>Select a high-performing template to start your campaign.</DialogDescription>
                                                        </DialogHeader>
                                                        <div className="flex items-center space-x-2 py-4">
                                                            <div className="relative flex-grow">
                                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                                                                <Input placeholder="Search templates..." className="pl-9 border-brand-secondary/50 focus:border-brand-primary" />
                                                            </div>
                                                            <Button variant="outline" className="text-brand-secondary border-brand-secondary/30"><Filter className="h-4 w-4 mr-2" /> Category</Button>
                                                        </div>
                                                        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                                                            {emailTemplates.map(template => (
                                                                <div key={template.id} onClick={() => applyTemplate(template)} className="p-4 rounded-lg border border-brand-secondary/20 hover:border-brand-primary hover:bg-brand-primary/5 cursor-pointer transition-all">
                                                                    <div className="flex justify-between items-start">
                                                                        <div>
                                                                            <h4 className="font-semibold text-brand-primary">{template.name}</h4>
                                                                            <p className="text-xs text-brand-secondary bg-slate-100 px-2 py-1 rounded-full inline-block mt-1">{template.category}</p>
                                                                        </div>
                                                                        <div className="flex space-x-4 text-right text-xs">
                                                                            <div>
                                                                                <p className="text-brand-secondary">Avg. Open</p>
                                                                                <p className="font-bold text-brand-primary text-sm flex items-center justify-end gap-1"><TrendingUp className="h-4 w-4 text-success" /> {template.openRate}</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-brand-secondary">Avg. Click</p>
                                                                                <p className="font-bold text-brand-primary text-sm flex items-center justify-end gap-1"><MousePointer className="h-4 w-4 text-success" /> {template.clickRate}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                                <ColorPicker currentColor={emailBodyColor} onChange={setEmailBodyColor} />
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className={`text-brand-text-primary font-medium flex justify-between items-center ${colorMap[emailBodyColor].text}`}>
                                                <span>Subject Line</span>
                                                <Button variant="ghost" size="sm" className={`text-xs text-brand-primary hover:bg-brand-primary/10 ${colorMap[emailBodyColor].text}`} onClick={() => setIsAbTesting(!isAbTesting)}>
                                                    <GitCompareArrows size={14} className="mr-1.5" /> A/B Test Subject
                                                </Button>
                                            </Label>
                                            <Input id="subject" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="Enter your email subject" className={`border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary ${colorMap[emailBodyColor].bg} ${colorMap[emailBodyColor].text}`} />
                                            {isAbTesting && <Input id="subject-b" placeholder="Variation B: e.g., A new whitepaper for {company}" className={`border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary mt-2 ${colorMap[emailBodyColor].bg} ${colorMap[emailBodyColor].text}`} />}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message" className={`text-brand-text-primary font-medium ${colorMap[emailBodyColor].text}`}>Message Body</Label>
                                            <div className={`bg-slate-100 px-3 py-1.5 border border-gray-300 border-b-0 rounded-t-md flex items-center space-x-3 ${colorMap[emailBodyColor].bg}`}>
                                                <button title="Bold" className="p-1 hover:bg-slate-200 rounded"><Bold size={16} className={`${colorMap[emailBodyColor].text}`} /></button>
                                                <button title="Italic" className="p-1 hover:bg-slate-200 rounded"><Italic size={16} className={`${colorMap[emailBodyColor].text}`} /></button>
                                                <button title="Insert Personalization Tag" className="p-1 hover:bg-slate-200 rounded"><Tags size={16} className={`${colorMap[emailBodyColor].text}`} /></button>
                                            </div>
                                            <Textarea id="message" value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Compose your message here..." className={`min-h-[250px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary rounded-b-md rounded-t-none border-t-0 ${colorMap[emailBodyColor].bg} ${colorMap[emailBodyColor].text}`} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="lg:col-span-2 space-y-8">
                                <Card className="border-brand-primary/20 shadow-sm bg-white">
                                    <Collapsible open={isDeliveryOpen} onOpenChange={setIsDeliveryOpen}>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-center">
                                                <CardTitle className="text-xl text-brand-primary">Delivery Strategy</CardTitle>
                                                <CollapsibleTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDeliveryOpen ? 'transform rotate-180' : ''}`} />
                                                    </Button>
                                                </CollapsibleTrigger>
                                            </div>
                                            <CardDescription className="text-brand-secondary">Optimize your sending for maximum deliverability.</CardDescription>
                                        </CardHeader>
                                        <CollapsibleContent>
                                            <CardContent className="space-y-6 pt-0">
                                                <div className="space-y-3">
                                                    <Label htmlFor="send-time" className="text-brand-text-primary font-medium">Delivery Timing</Label>
                                                    <Select value={deliveryOption} onValueChange={setDeliveryOption}>
                                                        <SelectTrigger className="border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary">
                                                            <SelectValue placeholder="Select send strategy" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="now"><Send className="h-4 w-4 mr-2 inline-block" /> Send Immediately</SelectItem>
                                                            <SelectItem value="schedule"><Calendar className="h-4 w-4 mr-2 inline-block" /> Schedule for Later</SelectItem>
                                                            <SelectItem value="optimal"><Clock className="h-4 w-4 mr-2 inline-block" /> Optimal Time per Recipient</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {deliveryOption === 'schedule' && (
                                                        <div className="mt-2">
                                                            <Label htmlFor="schedule-time" className="text-brand-text-primary font-medium">Select Date & Time</Label>
                                                            <Input 
                                                                type="datetime-local" 
                                                                value={scheduledTime} 
                                                                onChange={(e) => setScheduledTime(e.target.value)}
                                                                className="border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="space-y-4 pt-4 border-t border-brand-secondary/20">
                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="track-opens" defaultChecked className="text-brand-primary border-brand-secondary/50" />
                                                        <Label htmlFor="track-opens" className="text-brand-secondary font-normal">Track message opens</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="track-clicks" defaultChecked className="text-brand-primary border-brand-secondary/50" />
                                                        <Label htmlFor="track-clicks" className="text-brand-secondary font-normal">Track link clicks</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="unsubscribe" defaultChecked className="text-brand-primary border-brand-secondary/50" />
                                                        <Label htmlFor="unsubscribe" className="text-brand-secondary font-normal">Include unsubscribe link</Label>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </Card>
                                
                                <Card className="bg-white shadow-sm border-brand-primary/20">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-brand-primary flex items-center gap-2"><MessageSquareQuote /> Live Preview</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={`border rounded-lg p-4 text-sm font-sans transition-all duration-300 ${colorMap[emailBodyColor].bg} ${colorMap[emailBodyColor].text}`}>
                                            <p className="text-xs opacity-80">To: contact@example.com</p>
                                            <p className="text-xs opacity-80 mb-2 pb-2 border-b">From: you@sikry.com</p>
                                            <p className="font-bold mb-4">{emailSubject || "[Your Subject Here]"}</p>
                                            <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: emailBody.replace(/\n/g, '<br />') || "..." }} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* LINKEDIN TAB */}
                    <TabsContent value="linkedin" className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className={`border-brand-primary/20 shadow-sm transition-all duration-300 ${colorMap[linkedinBodyColor].bg}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className={`text-xl ${colorMap[linkedinBodyColor].text}`}>LinkedIn Message</CardTitle>
                                        <div className="flex items-center">
                                            <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
                                                <DialogTrigger asChild>
                                                    <Button 
                                                        variant="outline" 
                                                        className={`border-brand-primary/30 hover:bg-brand-primary/5 ${colorMap[linkedinBodyColor].buttonBg} ${colorMap[linkedinBodyColor].buttonText} shadow-sm hover:shadow-md transition-all duration-200`}
                                                    >
                                                        <Star className="h-4 w-4 mr-2" /> Choose from Template
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3xl">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl text-brand-primary">LinkedIn Template Library</DialogTitle>
                                                        <DialogDescription>Select a high-performing template for LinkedIn outreach.</DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex items-center space-x-2 py-4">
                                                        <div className="relative flex-grow">
                                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                                                            <Input placeholder="Search templates..." className="pl-9 border-brand-secondary/50 focus:border-brand-primary" />
                                                        </div>
                                                        <Button variant="outline" className="text-brand-secondary border-brand-secondary/30"><Filter className="h-4 w-4 mr-2" /> Category</Button>
                                                    </div>
                                                    <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                                                        {linkedinTemplates.map(template => (
                                                            <div key={template.id} onClick={() => applyTemplate(template)} className="p-4 rounded-lg border border-brand-secondary/20 hover:border-brand-primary hover:bg-brand-primary/5 cursor-pointer transition-all">
                                                                <div className="flex justify-between items-start">
                                                                    <div>
                                                                        <h4 className="font-semibold text-brand-primary">{template.name}</h4>
                                                                        <p className="text-xs text-brand-secondary bg-slate-100 px-2 py-1 rounded-full inline-block mt-1">{template.category}</p>
                                                                    </div>
                                                                    <div className="text-right text-xs">
                                                                        <p className="text-brand-secondary">Avg. Response</p>
                                                                        <p className="font-bold text-brand-primary text-sm flex items-center justify-end gap-1"><UserCheck className="h-4 w-4 text-success" /> {template.responseRate}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <ColorPicker currentColor={linkedinBodyColor} onChange={setLinkedinBodyColor} />
                                        </div>
                                    </div>
                                    <CardDescription className={`text-brand-secondary ${colorMap[linkedinBodyColor].text}`}>Craft your outreach for LinkedIn. Connection request messages are not supported by LinkedIn's API for automation, focus on a great first message post-connection.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="linkedin-main-message" className={`text-brand-text-primary font-medium ${colorMap[linkedinBodyColor].text}`}>Message</Label>
                                        <Textarea 
                                            id="linkedin-main-message" 
                                            value={linkedinMessage} 
                                            maxLength={2000} 
                                            onChange={(e) => setLinkedinMessage(e.target.value)} 
                                            placeholder="e.g., Thanks for connecting, {firstName}! I'd love to discuss..." 
                                            className={`min-h-[200px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary ${colorMap[linkedinBodyColor].bg} ${colorMap[linkedinBodyColor].text}`}
                                        />
                                        <div className={`text-xs text-brand-secondary text-right font-medium ${colorMap[linkedinBodyColor].text}`}>{linkedinMessage.length} / 2000 characters</div>
                                    </div>
                                    <div className={`text-xs text-brand-secondary pt-2 border-t border-brand-secondary/20 ${colorMap[linkedinBodyColor].text}`}>
                                        <p className="font-medium text-brand-text-primary mb-1">Available tags:</p>
                                        <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">{`{firstName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 ml-1">{`{lastName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 ml-1">{`{companyName}`}</code>
                                    </div>
                                </CardContent>
                            </Card>
                            
                            <Card className="bg-white shadow-sm border-brand-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-xl text-brand-primary flex items-center gap-2"><MessageSquareQuote /> Live Preview</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="border rounded-lg p-4 bg-slate-50">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0"></div>
                                            <div className="flex-grow">
                                                <p className="font-bold text-sm text-slate-800">Your Name <span className="text-xs text-slate-500 font-normal">• 1st</span></p>
                                                <p className="text-xs text-slate-500">Your Title at SIKRY Intelligence</p>
                                                <div className={`mt-3 border p-3 rounded-lg text-sm transition-all duration-300 ${colorMap[linkedinBodyColor].bg} ${colorMap[linkedinBodyColor].text}`}>
                                                    {linkedinMessage || "..."}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* SMS TAB */}
                    <TabsContent value="sms" className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className={`border-brand-primary/20 shadow-sm transition-all duration-300 ${colorMap[smsBodyColor].bg}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className={`text-xl ${colorMap[smsBodyColor].text}`}>SMS Message</CardTitle>
                                        <div className="flex items-center">
                                            <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" className={`border-brand-primary/30 hover:bg-brand-primary/5 ${colorMap[smsBodyColor].buttonBg} ${colorMap[smsBodyColor].buttonText}`}>
                                                        <Star className="h-4 w-4 mr-2" /> Choose from Template
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3xl">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl text-brand-primary">SMS Template Library</DialogTitle>
                                                        <DialogDescription>Select a high-performing template for SMS campaigns.</DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex items-center space-x-2 py-4">
                                                        <div className="relative flex-grow">
                                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                                                            <Input placeholder="Search templates..." className="pl-9 border-brand-secondary/50 focus:border-brand-primary" />
                                                        </div>
                                                        <Button variant="outline" className="text-brand-secondary border-brand-secondary/30"><Filter className="h-4 w-4 mr-2" /> Category</Button>
                                                    </div>
                                                    <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                                                        {smsTemplates.map(template => (
                                                            <div key={template.id} onClick={() => applyTemplate(template)} className="p-4 rounded-lg border border-brand-secondary/20 hover:border-brand-primary hover:bg-brand-primary/5 cursor-pointer transition-all">
                                                                <div className="flex justify-between items-start">
                                                                    <div>
                                                                        <h4 className="font-semibold text-brand-primary">{template.name}</h4>
                                                                        <p className="text-xs text-brand-secondary bg-slate-100 px-2 py-1 rounded-full inline-block mt-1">{template.category}</p>
                                                                    </div>
                                                                    <div className="text-right text-xs">
                                                                        <p className="text-brand-secondary">Avg. Open Rate</p>
                                                                        <p className="font-bold text-brand-primary text-sm flex items-center justify-end gap-1"><Eye className="h-4 w-4 text-success" /> {template.openRate}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <ColorPicker currentColor={smsBodyColor} onChange={setSmsBodyColor} />
                                        </div>
                                    </div>
                                    <CardDescription className={`text-brand-secondary ${colorMap[smsBodyColor].text}`}>Keep it concise. Standard SMS rates and regulations apply.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="sms-message" className={`text-brand-text-primary font-medium ${colorMap[smsBodyColor].text}`}>Message</Label>
                                        <Textarea 
                                            id="sms-message" 
                                            value={smsMessage} 
                                            onChange={handleSmsChange} 
                                            placeholder="Hi {firstName}, quick update from SIKRY..." 
                                            className={`min-h-[150px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary ${colorMap[smsBodyColor].bg} ${colorMap[smsBodyColor].text}`} 
                                        />
                                        {renderSmsSegments()}
                                    </div>
                                    <p className={`text-xs text-brand-secondary pt-4 border-t border-brand-secondary/20 ${colorMap[smsBodyColor].text}`}>
                                        Tip: Include opt-out info like 'Reply STOP to end'. Use a URL shortener for links to save characters.
                                    </p>
                                </CardContent>
                            </Card>
                            
                            <Card className="bg-white shadow-sm border-brand-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-xl text-brand-primary flex items-center gap-2">
                                        <MessageSquareQuote /> SMS Preview
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="max-w-[320px] mx-auto  rounded-lg">
                                        {/* Modern chat header */}
                                        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border-b">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-medium">SI</div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">SIKSO Messages</p>
                                                    <p className="text-xs text-gray-500">Typically replies in minutes</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-500">
                                                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                            </span>
                                        </div>

                                        {/* Chat container */}
                                        <div className={`h-[500px] overflow-y-auto flex flex-col  space-y-3 px-4  py-3 transition-all duration-300 ${colorMap[smsBodyColor].bg} border border-gray-200 `}>
                                            {/* System message */}
                                            <div className="text-center ">
                                                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    Today
                                                </span>
                                            </div>

                                            {/* Incoming Message */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                className="flex items-end gap-2"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                                    </svg>
                                                </div>
                                                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-md max-w-[75%] shadow-sm text-sm">
                                                    👋 Hey there! Need a quick update?
                                                </div>
                                            </motion.div>

                                            {/* Outgoing Message (user message) */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", delay: 0.2 }}
                                                className="self-end"
                                            >
                                                <div className={`p-3 rounded-2xl rounded-br-md shadow-sm max-w-[75%] break-words text-sm ${colorMap[smsBodyColor].text} ${colorMap[smsBodyColor].bg === 'bg-gray-800' ? 'bg-brand-primary' : 'bg-brand-primary/90'}`}>
                                                    {smsMessage || "Hi {firstName}, just checking in about your SIKRY updates..."}
                                                </div>
                                                <div className="text-right mt-1">
                                                    <span className="text-xs text-gray-500">
                                                        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                                    </span>
                                                </div>
                                            </motion.div>

                                            {/* Opt-Out */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", delay: 0.4 }}
                                                className="text-center"
                                            >
                                                <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    Reply STOP to unsubscribe
                                                </span>
                                            </motion.div>

                                            {/* Typing indicator */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6 }}
                                                className="flex items-center gap-1 pt-2"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                                    </svg>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Input area (non-functional but realistic) */}
                                        <div className="bg-gray-50 border-t p-3 rounded-b-lg">
                                            <div className="flex items-center gap-2">
                                                <button className="text-gray-400 hover:text-gray-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                                    </svg>
                                                </button>
                                                <input 
                                                    type="text" 
                                                    placeholder="Type a message..." 
                                                    className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
                                                    disabled
                                                />
                                                <button className="text-brand-primary hover:text-brand-primary/80">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
                
                {/* Assistant Section */}
                <Card className="bg-gradient-to-br from-sidebar to-brand-primary text-white shadow-lg border-none">
                    {/* ... Assistant card content ... */}
                    <AIAssistant />
                </Card>
            </div>

            {/* Action Footer */}
            <div className="fixed bottom-0 left-[16rem]  right-[40rem] bg-white/80 backdrop-blur-sm border-t border-brand-primary/10 z-50">
                <div className="container h-16 mt-1 mx-auto py-4 px-6 flex justify-between items-center">
                    <div>
                        <Label className="text-brand-secondary"></Label>
                        <div className="flex items-center gap-2">
                             <Button variant="outline" size="sm" className="border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5" onClick={() => setIsUploadModalOpen(true)}>
                                <Upload className="h-4 w-4 mr-2" /> Upload List
                            </Button>
                            {recipientsCount > 0 ? (
                                <span className="font-bold text-brand-primary text-lg">{recipientsCount} Recipients</span>
                            ) : (
                               <span className="text-sm text-brand-secondary">No audience selected</span>
                            )}
                        </div>
                    </div>
                    <div className="space-x-3">
                        <Button variant="outline" className="text-brand-primary border-brand-primary/30 hover:bg-brand-primary/5">
                            <Save className="h-4 w-4 mr-2" /> Save Draft
                        </Button>
                        <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold shadow-lg shadow-brand-primary/30">
                            <Send className="h-4 w-4 mr-2" /> Review & Send
                        </Button>
                    </div>
                </div>
            </div>

            {/* Upload List Modal */}
            <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                <DialogContent className="w-[16rem] bg-white/90 backdrop-blur-sm p-0 fixed mt-20 left-[8rem] rounded-xl rounded-b-none shadow-lg border border-brand-primary/10">
                    <div className="p-2 h-full flex flex-col overflow-y-auto">
                        <DialogHeader className="pb-2">
                            <DialogTitle className="text-lg text-brand-primary flex justify-between items-center">
                                Upload Contact List
                                <Button variant="warning" size="icon" onClick={() => setIsUploadModalOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </DialogTitle>
                            <DialogDescription className="text-xs text-brand-secondary">
                                Select your audience source
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex-1 space-y-2 mt-2">
                            <div className="space-y-1.5">
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <FileText className="h-4 w-4 text-brand-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">Upload CSV/Excel</p>
                                            <p className="text-xs text-brand-secondary">Import contacts from spreadsheet</p>
                                        </div>
                                    </div>
                                </Button>
                                
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-brand-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">Company Contacts</p>
                                            <p className="text-xs text-brand-secondary">Select from your organization's CRM</p>
                                        </div>
                                    </div>
                                </Button>
                                
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4 text-brand-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">Email Subscribers</p>
                                            <p className="text-xs text-brand-secondary">Your newsletter subscribers</p>
                                        </div>
                                    </div>
                                </Button>
                                
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <svg className="h-4 w-4 text-brand-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">LinkedIn Connections</p>
                                            <p className="text-xs text-brand-secondary">Your 1st-degree connections</p>
                                        </div>
                                    </div>
                                </Button>
                                
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <ShieldCheck className="h-4 w-4 text-brand-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">GDPR Compliant List</p>
                                            <p className="text-xs text-brand-secondary">Pre-verified contacts</p>
                                        </div>
                                    </div>
                                </Button>
                                
                                <Button variant="outline" className="w-full justify-start text-left h-14 border-brand-primary/20">
                                    <div className="flex items-center space-x-2">
                                        <Plus className="h-4 w-4 text-brand-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-brand-text-primary">Create New Segment</p>
                                            <p className="text-xs text-brand-secondary">Build custom audience</p>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <DialogFooter className="border-t border-brand-primary/10 pt-3 mt-2">
                            <Button variant="ghost" size="sm" onClick={() => setIsUploadModalOpen(false)}>Cancel</Button>
                            <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white">Import Contacts</Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}