import {
  CalendarIcon,
  ClockIcon,
  MessageCircleIcon,
  UsersIcon,
  BuildingIcon,
  MonitorIcon,
  LayersIcon,
  BriefcaseIcon,
} from "@/components/ui/Icons";

export type FeatureIconName =
  | "appointments"
  | "services"
  | "staff"
  | "channels"
  | "branches"
  | "customers"
  | "platform"
  | "features"
  | "setup"
  | "about";

const icons = {
  appointments: CalendarIcon,
  services: LayersIcon,
  staff: ClockIcon,
  channels: MessageCircleIcon,
  branches: BuildingIcon,
  customers: UsersIcon,
  platform: MonitorIcon,
  features: LayersIcon,
  setup: BriefcaseIcon,
  about: UsersIcon,
};

export default function FeatureIcon({
  name,
  className = "w-5 h-5",
}: {
  name: FeatureIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return (
    <span aria-hidden="true" className="inline-flex">
      <Icon className={className} />
    </span>
  );
}
