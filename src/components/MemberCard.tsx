
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Member {
    name: string;
    username: string;
    bio: string;
    avatar_url: string;
}

export default function MemberCard({
    member,
}: {
    member: Member;
}) {
    const [imageError, setImageError] = useState(false);

    const initials = member.name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <article className="group flex h-full flex-col rounded-xl border border-[#d0d7de] bg-white p-5 transition-all duration-200 hover:border-[#afb8c1] hover:shadow-[0_3px_8px_rgba(31,35,40,0.08)]">
            {/* Member information */}
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d0d7de] bg-[#f6f8fa] text-sm font-semibold text-[#0969da]">
                    {!imageError && member.avatar_url ? (
                        <Image
                            src={member.avatar_url}
                            alt={`${member.name}'s avatar`}
                            width={48}
                            height={48}
                            onError={() => setImageError(true)}
                            className="h-full w-full rounded-full object-cover"
                        />
                    ) : (
                        <span aria-label={`${member.name} initials`}>
                            {initials}
                        </span>
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <Link
                        href={`/${member.username}`}
                        className="block truncate text-base font-semibold text-[#0969da] decoration-2 underline-offset-4 hover:underline"
                    >
                        {member.name}
                    </Link>

                    <p className="mt-1 truncate text-sm text-[#656d76]">
                        @{member.username}
                    </p>
                </div>
            </div>

            {/* Member bio */}
            <p className="mt-4 flex-grow text-sm leading-6 text-[#1f2328]">
                {member.bio || "No bio provided yet."}
            </p>

            {/* Card footer */}
            <div className="mt-5 flex items-center gap-2 border-t border-[#d8dee4] pt-3">
                <span className="h-2 w-2 rounded-full bg-[#1f883d]" />
                <span className="text-xs text-[#656d76]">
                    Code-Shelf member
                </span>
            </div>
        </article>
    );
}
