
"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfileAvatarProps {
    name: string;
    username: string;
    avatarUrl: string;
}

export default function ProfileAvatar({
    name,
    username,
    avatarUrl,
}: ProfileAvatarProps) {
    const [imageError, setImageError] = useState(false);

    const initials = name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="flex h-[220px] w-[220px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d0d7de] bg-[#f6f8fa] text-5xl font-semibold text-[#0969da] md:h-[240px] md:w-[240px]">
            {avatarUrl && !imageError ? (
                <Image
                    src={avatarUrl}
                    alt={`${name}'s avatar`}
                    width={240}
                    height={240}
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover"
                    priority
                />
            ) : (
                <span aria-label={`${username}'s initials`}>
                    {initials}
                </span>
            )}
        </div>
    );
}
