
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'members.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const members = JSON.parse(jsonData);

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);

    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}
