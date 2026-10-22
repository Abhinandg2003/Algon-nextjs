import {
  Activity, Ambulance, ArrowUpRight, BarChart3, BedDouble, Bell, Bot, Boxes, Brain, Building2,
  CalendarCheck, CircleCheck, ClipboardCheck, ClipboardList, Clock, Cloud, Code2, Cpu, Database,
  Eye, FileCode, FileSearch, FileText, FlaskConical, GitBranch, Globe, GraduationCap, Handshake,
  Headphones, HeartPulse, History, Hospital, Inbox, KeyRound, Languages, Layers, LayoutDashboard,
  LineChart, Link2, ListChecks, Lock, MessageSquare, Mic, Microscope, MonitorSmartphone, Network,
  Package, PanelsTopLeft, PhoneCall, Pill, Plug, Puzzle, Receipt, RefreshCw, Repeat, Rocket, Route,
  Scale, ScanText, School, Search, Server, Settings, ShieldCheck, Smartphone, Sparkles, Split,
  Stethoscope, Store, Syringe, Target, Terminal, Timer, TrendingUp, TriangleAlert, Truck, UserCheck,
  UserPlus, Users, Wallet, Workflow, Wrench, Zap,
} from "lucide-react"

// Curated set so page data can name icons as strings ("Stethoscope") without
// pulling the whole lucide library into the bundle. Add an icon here before
// using its name in src/data/servicePages.
export const ICONS = {
  Activity, Ambulance, ArrowUpRight, BarChart3, BedDouble, Bell, Bot, Boxes, Brain, Building2,
  CalendarCheck, CircleCheck, ClipboardCheck, ClipboardList, Clock, Cloud, Code2, Cpu, Database,
  Eye, FileCode, FileSearch, FileText, FlaskConical, GitBranch, Globe, GraduationCap, Handshake,
  Headphones, HeartPulse, History, Hospital, Inbox, KeyRound, Languages, Layers, LayoutDashboard,
  LineChart, Link2, ListChecks, Lock, MessageSquare, Mic, Microscope, MonitorSmartphone, Network,
  Package, PanelsTopLeft, PhoneCall, Pill, Plug, Puzzle, Receipt, RefreshCw, Repeat, Rocket, Route,
  Scale, ScanText, School, Search, Server, Settings, ShieldCheck, Smartphone, Sparkles, Split,
  Stethoscope, Store, Syringe, Target, Terminal, Timer, TrendingUp, TriangleAlert, Truck, UserCheck,
  UserPlus, Users, Wallet, Workflow, Wrench, Zap,
}

export default function Icon({ name, size = 22, className = "" }) {
  const Cmp = ICONS[name] || CircleCheck
  return <Cmp size={size} strokeWidth={1.5} className={className} aria-hidden="true" />
}
