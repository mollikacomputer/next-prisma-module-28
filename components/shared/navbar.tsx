
"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// User menu items configuration
const userMenuItems = [
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

type IUser = {
    success : boolean,
    message : string,
    data : {
        profile : {
            id : string,
            name : string,
            email : string,
            activeStatus : string,
            role : string,
            createdAt : string,
            updatedAt : string,
            profile : {
                id : string,
                profilePhoto : string,
                bio : string | null,
                userId : string,
                createdAt : string,
                updatedAt : string
            }
        }
    }
}

type NavbarProps = {
    user : IUser
}

export function Navbar({user} : NavbarProps) {
    const router = useRouter()
  const handleUserMenuAction = async (action: string) => {

    if(action === "logout"){
        await logout();
        toast.success("User Logged Out Successfully!");
        router.push("/login");
    }
  };

  return (
    <nav className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-primary">
              NextJs Press
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Dropdown */}
          {
            user?.success ? (
                <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">
                    {user.data?.profile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.data?.profile.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {userMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem
                    key={item.action}
                    onClick={() => handleUserMenuAction(item.action)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={async () => {
                await handleUserMenuAction("logout");
              }}>
                <LogOut className="w-4 h-4 mr-2" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            ) : <Link href={"/login"} >
                   <Button className="cursor-pointer">
                        Login
                   </Button>
            </Link>
          }
        </div>
      </div>
    </nav>
  );
}




// "use client"

// import Link from "next/link"
// import { User, LogOut, Settings } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// // nav item গুলো এখানে array আকারে রাখা - নতুন link যোগ করতে শুধু এখানে entry বসালেই হবে
// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Contact", href: "/contact" },
//   { label: "News", href: "/news" },
// ]

// interface NavbarUser {
//   name: string
//   email: string
// }

// interface NavbarProps {
//   user?: NavbarUser
//   onSettingsClick?: () => void
//   onLogoutClick?: () => void
// }

// function getInitials(name: string) {
//   return name
//     .trim()
//     .split(/\s+/)
//     .slice(0, 2)
//     .map((part) => part[0]?.toUpperCase() ?? "")
//     .join("")
// }

// export function Navbar({ user, onSettingsClick, onLogoutClick }: NavbarProps) {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
//       <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
//           <span className="text-xl">
//             Acme<span className="text-muted-foreground">.</span>
//           </span>
//         </Link>

//         {/* Nav links */}
//         <nav className="hidden items-center gap-1 md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* User dropdown */}
//         <DropdownMenu>
//           <DropdownMenuTrigger
//             render={
//               <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu" />
//             }
//           >
//             <Avatar className="h-8 w-8">
//               <AvatarFallback className="text-xs font-medium">
//                 {user?.name ? getInitials(user.name) :  <User className="h-4 w-4" />}
//               </AvatarFallback>
//             </Avatar>
//           </DropdownMenuTrigger>

//           <DropdownMenuContent align="end" className="w-56">
//             <div className="flex items-center gap-2 px-1.5 py-1.5">
//               <Avatar className="h-8 w-8">
//                 <AvatarFallback className="text-xs font-medium">
//                   {user?.name ? getInitials(user.name) : <User className="h-4 w-4" />}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="flex flex-col overflow-hidden">
//                 <span className="truncate text-sm font-medium leading-none">
//                   {user?.name ?? "User"}
//                 </span>
//                 <span className="truncate text-xs leading-none text-muted-foreground mt-1">
//                   {user?.email ?? ""}
//                 </span>
//               </div>
//             </div>

//             <DropdownMenuSeparator />

//             <DropdownMenuItem onClick={onSettingsClick}>
//               <Settings className="h-4 w-4" />
//               Settings
//             </DropdownMenuItem>

//             <DropdownMenuSeparator />

//             <DropdownMenuItem variant="destructive" onClick={onLogoutClick}>
//               <LogOut className="h-4 w-4" />
//               Log out
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }
