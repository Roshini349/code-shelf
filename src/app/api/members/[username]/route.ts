
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type Props = {
  params: Promise<{ username: string }>;
};

export async function GET(
  request: Request,
  { params }: Props
) {
  try {
    const { username } = await params;

    const filePath = path.join(
      process.cwd(),
      'data',
      'members.json'
    );

    const jsonData = await fs.readFile(filePath, 'utf-8');

    const members = JSON.parse(jsonData);

    const member = members.find(
      (item: { username: string }) =>
        item.username === username
    );

    if (!member) {
      return NextResponse.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);

    return NextResponse.json(
      { error: 'Failed to fetch member' },
      { status: 500 }
    );
  }
}
