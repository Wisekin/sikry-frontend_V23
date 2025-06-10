import { NextResponse, type NextRequest } from 'next/server';
import { createMockApiResponse } from '@/lib/utils/mockApiUtils';

export interface LeadResponseQueueItem {
  id: string;
  leadId: string; 
  leadIdentifier: string; // User-friendly identifier for the lead
  ruleTriggered: string; // Name of the rule
  ruleId: string;
  status: 'pending' | 'processing' | 'failed' | 'completed' | 'retrying';
  queuedAt: string;
  lastAttemptAt?: string;
  errorMessage?: string; 
  retryCount?: number;
}

// In-memory store for mock queue items
let mockQueue: LeadResponseQueueItem[] = [
  {
    id: 'item-q-001',
    leadId: 'lead-123',
    leadIdentifier: 'john.doe@example.com',
    ruleTriggered: 'High-Intent Website Lead',
    ruleId: 'rule-001',
    status: 'pending',
    queuedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(), // 10 minutes ago
    retryCount: 0,
  },
  {
    id: 'item-q-002',
    leadId: 'lead-124',
    leadIdentifier: 'jane.smith@example.com',
    ruleTriggered: 'EMEA Region General Inquiry',
    ruleId: 'rule-002',
    status: 'processing',
    queuedAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    lastAttemptAt: new Date(Date.now() - 1000 * 60 * 1).toISOString(), // 1 minute ago
    retryCount: 0,
  },
  {
    id: 'item-q-003',
    leadId: 'lead-125',
    leadIdentifier: 'bob.builder@construct.co',
    ruleTriggered: 'High-Intent Website Lead',
    ruleId: 'rule-001',
    status: 'failed',
    queuedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    lastAttemptAt: new Date(Date.now() - 1000 * 60 * 55).toISOString(), // 55 minutes ago
    errorMessage: 'CRM API timeout: Unable to create task.',
    retryCount: 2,
  },
  {
    id: 'item-q-004',
    leadId: 'lead-126',
    leadIdentifier: 'alice.w@wonder.net',
    ruleTriggered: 'Demo Request Auto-Response',
    ruleId: 'rule-005', 
    status: 'completed',
    queuedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(), // 1 day ago
    lastAttemptAt: new Date(Date.now() - 1000 * 60 * 60 * 23.9).toISOString(),
    retryCount: 0,
  },
   {
    id: 'item-q-005',
    leadId: 'lead-127',
    leadIdentifier: 'charlie.brown@peanuts.com',
    ruleTriggered: 'Low-Engagement Lead Nurturing',
    ruleId: 'rule-003',
    status: 'pending',
    queuedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    retryCount: 1,
  },
];

// GET all queue items
export async function GET() {
  const delay = Math.random() * 200 + 100;
  // For consistency with other APIs and potential frontend expectations,
  // let's wrap the array in a 'data' property.
  const responseData = { data: [...mockQueue], success: true };
  const response = await createMockApiResponse(responseData, delay); 
  return NextResponse.json(response);
}

// POST to simulate actions like 'retry' or 'cancel'
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, itemId } = body;

    if (!itemId || !action) {
      return NextResponse.json({ success: false, message: 'Action and itemId are required.' }, { status: 400 });
    }

    const itemIndex = mockQueue.findIndex(item => item.id === itemId);

    if (itemIndex === -1) {
      return NextResponse.json({ success: false, message: 'Queue item not found.' }, { status: 404 });
    }

    let message = '';
    let updatedItem = { ...mockQueue[itemIndex] }; // Operate on a copy

    if (action === 'retry') {
      if (updatedItem.status === 'failed' || updatedItem.status === 'pending') { 
        updatedItem.status = 'retrying'; 
        updatedItem.lastAttemptAt = new Date().toISOString();
        updatedItem.retryCount = (updatedItem.retryCount || 0) + 1;
        updatedItem.errorMessage = undefined; 
        message = `Item ${itemId} marked for retry.`;
        mockQueue[itemIndex] = updatedItem; // Update the "database"
      } else {
        return NextResponse.json({ success: false, message: `Cannot retry item in '${updatedItem.status}' status.` }, { status: 400 });
      }
    } else if (action === 'cancel') {
      mockQueue.splice(itemIndex, 1); // Remove from "database"
      message = `Item ${itemId} cancelled and removed from queue.`;
      updatedItem = undefined as any; // Item is gone
    } else {
      return NextResponse.json({ success: false, message: 'Invalid action.' }, { status: 400 });
    }
    
    const response = await createMockApiResponse({ success: true, message, item: updatedItem }, 150);
    return NextResponse.json(response);

  } catch (e) {
    return NextResponse.json({ success: false, message: 'Invalid request body or processing error' }, { status: 400 });
  }
}
