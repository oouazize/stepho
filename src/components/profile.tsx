'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/core/ui/Avatar';
import { Button } from '~/core/ui/Button';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '~/core/ui/dropdown-menu';

export default function Profile() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Logged in as</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>John Doe</DropdownMenuItem>
          <DropdownMenuItem>Admin</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
