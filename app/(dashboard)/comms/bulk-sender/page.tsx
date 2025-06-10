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
    Save, Clock, Bold, Italic, Underline, Link2, List, Tags, Info, MessageCircle, GitCompareArrows, BrainCircuit, Sparkles, UserCheck, MessageSquareQuote
} from "lucide-react";
import { useState, useMemo, useCallback } from "react"
import { Progress } from "@/components/ui/progress"


// --- MOCK DATA FOR TEMPLATES ---
const emailTemplates = [
    { id: 1, name: "Welcome Series - Day 1", category: "Welcome", openRate: "62.3%", clickRate: "14.8%", content: "Hello {first_name},\n\nWelcome to SIKRY! We're thrilled to have you on board. Here's a quick guide to get you started...\n\nBest,\nThe SIKRY Team" },
    { id: 2, name: "Product Launch Announcement", category: "Promotion", openRate: "35.1%", clickRate: "8.2%", content: "Hello {first_name},\n\nBig news! We're excited to announce the launch of our new feature. It's designed to help {company} achieve even greater results by...\n\nExplore it now,\nThe SIKRY Team" },
    { id: 3, name: "Webinar Invitation", category: "Event", openRate: "41.7%", clickRate: "11.5%", content: "Hi {first_name},\n\nJoin our exclusive webinar next week where we'll discuss the future of enterprise AI. Seats are limited, so reserve your spot today!\n\nSee you there,\nThe SIKRY Team" },
    { id: 4, name: "Re-engagement Campaign", category: "Follow-up", openRate: "28.5%", clickRate: "5.1%", content: "Hi {first_name},\n\nWe haven't seen you in a while. We've made a lot of improvements and wanted to share what's new at SIKRY. We think you'll love...\n\nCome see what's new,\nThe SIKRY Team" },
    { id: 5, name: "Aggressive Follow-Up", category: "Follow-up", openRate: "55.2%", clickRate: "12.8%", content: "Hi {first_name},\n\nJust following up on my previous message regarding your interest in our solutions. Are you free for a quick 15-minute chat this week?\n\nBest regards,\nThe SIKRY Team" },
];


// Helper function to count personalization tags
const countTags = (text) => {
    const regex = /{\w+}/g;
    const matches = text.match(regex) || [];
    return new Set(matches).size; // Count unique tags
};

// Helper function for simple readability
const calculateReadability = (text) => {
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


    // Smarter feature calculations
    const personalizationCount = useMemo(() => countTags(`${emailBody} ${emailSubject} ${linkedinMessage} ${smsMessage}`), [emailBody, emailSubject, linkedinMessage, smsMessage]);
    const readability = useMemo(() => calculateReadability(emailBody), [emailBody]);


    const handleSmsChange = (e) => {
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
    
    const applyTemplate = (template) => {
        setEmailSubject(template.name); // Often the template name is a good starting point for a subject
        setEmailBody(template.content);
        setIsTemplateModalOpen(false); // Close the modal
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
                              <Card className="border-brand-primary/20 shadow-sm bg-white">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                       <CardTitle className="text-xl text-brand-primary">Email Composer</CardTitle>
                                       <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="text-brand-primary border-brand-primary/30 hover:bg-brand-primary/5">
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
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                     <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-brand-text-primary font-medium flex justify-between items-center">
                                            <span>Subject Line</span>
                                            <Button variant="ghost" size="sm" className="text-xs text-brand-primary hover:bg-brand-primary/10" onClick={() => setIsAbTesting(!isAbTesting)}>
                                                <GitCompareArrows size={14} className="mr-1.5" /> A/B Test Subject
                                            </Button>
                                        </Label>
                                        <Input id="subject" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="Enter your email subject" className="border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary" />
                                        {isAbTesting && <Input id="subject-b" placeholder="Variation B: e.g., A new whitepaper for {company}" className="border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary mt-2" />}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-brand-text-primary font-medium">Message Body</Label>
                                        <div className="bg-slate-100 px-3 py-1.5 border border-gray-300 border-b-0 rounded-t-md flex items-center space-x-3">
                                            <button title="Bold" className="p-1 hover:bg-slate-200 rounded"><Bold size={16} className="text-gray-600" /></button>
                                            <button title="Italic" className="p-1 hover:bg-slate-200 rounded"><Italic size={16} className="text-gray-600" /></button>
                                            <button title="Insert Personalization Tag" className="p-1 hover:bg-slate-200 rounded"><Tags size={16} className="text-gray-600" /></button>
                                        </div>
                                        <Textarea id="message" value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Compose your message here..." className="min-h-[250px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary rounded-b-md rounded-t-none border-t-0" />
                                    </div>
                                </CardContent>
                            </Card>
                           </div>
                           <div className="lg:col-span-2 space-y-8">
                                <Card className="border-brand-primary/20 shadow-sm bg-white">
                                    <CardHeader>
                                      <CardTitle className="text-xl text-brand-primary">Delivery Strategy</CardTitle>
                                      <CardDescription className="text-brand-secondary">Optimize your sending for maximum deliverability.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                      <div className="space-y-3">
                                          <Label htmlFor="send-time" className="text-brand-text-primary font-medium">Delivery Timing</Label>
                                          <Select defaultValue="optimal">
                                            <SelectTrigger className="border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary">
                                              <SelectValue placeholder="Select send strategy" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="now"><Send className="h-4 w-4 mr-2 inline-block" /> Send Immediately</SelectItem>
                                              <SelectItem value="schedule"><Calendar className="h-4 w-4 mr-2 inline-block" /> Schedule for Later</SelectItem>
                                              <SelectItem value="optimal"><Clock className="h-4 w-4 mr-2 inline-block" /> Optimal Time per Recipient</SelectItem>
                                            </SelectContent>
                                          </Select>
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
                                </Card>
                           </div>
                        </div>
                    </TabsContent>

                    {/* LINKEDIN TAB */}
                    <TabsContent value="linkedin" className="pt-6">
                        <Card className="border-brand-primary/20 shadow-sm bg-white">
                            <CardHeader>
                                <CardTitle className="text-xl text-brand-primary">LinkedIn Message</CardTitle>
                                <CardDescription className="text-brand-secondary">Craft your outreach for LinkedIn. Connection request messages are not supported by LinkedIn's API for automation, focus on a great first message post-connection.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                 <div className="space-y-2">
                                    <Label htmlFor="linkedin-main-message" className="text-brand-text-primary font-medium">Message</Label>
                                    <Textarea id="linkedin-main-message" value={linkedinMessage} maxLength="2000" onChange={(e) => setLinkedinMessage(e.target.value)} placeholder="e.g., Thanks for connecting, {firstName}! I'd love to discuss..." className="min-h-[200px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary"/>
                                    <div className="text-xs text-brand-secondary text-right font-medium">{linkedinMessage.length} / 2000 characters</div>
                                </div>
                                <div className="text-xs text-brand-secondary pt-2 border-t border-brand-secondary/20">
                                  <p className="font-medium text-brand-text-primary mb-1">Available tags:</p>
                                  <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">{`{firstName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 ml-1">{`{lastName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 ml-1">{`{companyName}`}</code>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* SMS TAB */}
                    <TabsContent value="sms" className="pt-6">
                        <Card className="border-brand-primary/20 shadow-sm bg-white">
                            <CardHeader>
                                <CardTitle className="text-xl text-brand-primary">SMS Message</CardTitle>
                                <CardDescription className="text-brand-secondary">Keep it concise. Standard SMS rates and regulations apply.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="sms-message" className="text-brand-text-primary font-medium">Message</Label>
                                    <Textarea id="sms-message" value={smsMessage} onChange={handleSmsChange} placeholder="Hi {firstName}, quick update from SIKRY..." className="min-h-[150px] border-brand-secondary/50 focus:border-brand-primary focus:ring-brand-primary" />
                                    {renderSmsSegments()}
                                </div>
                                <p className="text-xs text-brand-secondary pt-4 border-t border-brand-secondary/20">
                                    Tip: Include opt-out info like 'Reply STOP to end'. Use a URL shortener for links to save characters.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                
                {/* Assistant and Preview Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <Card className="bg-gradient-to-br from-sidebar to-brand-primary text-white shadow-lg border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BrainCircuit /> Campaign Assistant</CardTitle>
                            <CardDescription className="text-brand-accent/80">Real-time tips to improve your outreach.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-brand-accent"><UserCheck size={16}/> Personalization Score</Label>
                                <Progress value={Math.min(100, personalizationCount * 33.33)} className="h-2 [&>div]:bg-brand-accent" />
                                <p className="text-xs text-white/90">
                                    {personalizationCount === 0 && "Add tags like {first_name} to connect better."}
                                    {personalizationCount === 1 && "Good start! Can you add one more tag?"}
                                    {personalizationCount === 2 && "Great job on personalization!"}
                                    {personalizationCount >= 3 && "Excellent! This message feels personal."}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-brand-accent"><Sparkles size={16}/> Readability Analysis (Email)</Label>
                                <div className="flex items-center gap-2">
                                    <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${readability.score === 'Easy' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>{readability.score}</span>
                                    <p className="text-xs text-white/90">{readability.feedback}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm border-brand-primary/20">
                        <CardHeader>
                            <CardTitle className="text-xl text-brand-primary flex items-center gap-2"><MessageSquareQuote /> Live Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {selectedTab === 'email' && (
                                <div className="border rounded-lg p-4 bg-slate-50 text-sm font-sans text-slate-800">
                                    <p className="text-xs text-slate-500">To: contact@example.com</p>
                                    <p className="text-xs text-slate-500 mb-2 pb-2 border-b">From: you@sikry.com</p>
                                    <p className="font-bold mb-4">{emailSubject || "[Your Subject Here]"}</p>
                                    <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: emailBody.replace(/\n/g, '<br />') || "..." }} />
                                </div>
                            )}
                            {selectedTab === 'linkedin' && (
                                <div className="border rounded-lg p-4 bg-slate-50">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-sm text-slate-800">Your Name <span className="text-xs text-slate-500 font-normal">• 1st</span></p>
                                            <p className="text-xs text-slate-500">Your Title at SIKRY Intelligence</p>
                                            <div className="mt-3 bg-white border p-3 rounded-lg text-sm text-slate-700">
                                                {linkedinMessage || "..."}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedTab === 'sms' && (
                                <div className="w-full max-w-[280px] mx-auto bg-scrollbar-track rounded-[28px] p-2 shadow-xl">
                                    <div className="bg-slate-100 h-[450px] rounded-[20px] p-3 overflow-y-auto flex flex-col space-y-3">
                                        <div className="bg-[#3b82f6] text-white p-2.5 rounded-2xl rounded-br-md max-w-[85%] ml-auto self-end shadow-md break-words">
                                            {smsMessage || "..."}
                                        </div>
                                        <div className="bg-gray-200 text-gray-800 p-2.5 rounded-2xl rounded-bl-md max-w-[85%] mr-auto self-start shadow-md">
                                            STOP
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Action Footer */}
             <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-brand-primary/10 z-50">
                <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                    <div>
                        <Label className="text-brand-secondary">Audience</Label>
                        <div className="flex items-center gap-2">
                             <Button variant="outline" size="sm" className="border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5" onClick={handleFileUpload}>
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
        </div>
    )
}