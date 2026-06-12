import { MaterialIcon } from "./MaterialIcon"
import { Logo } from "./Logo"

const quickActions = [
  {
    icon: "person_add",
    title: "AUTO FILL ALL",
    subtitle: "Complete form",
  },
  {
    icon: "ink_eraser",
    title: "CLEAR FORM",
    subtitle: "Reset all fields",
  },
  {
    icon: "auto_awesome",
    title: "AI ANALYZE",
    subtitle: "Smart fill",
  },
  {
    icon: "shuffle",
    title: "SHUFFLE ALL",
    subtitle: "AI randomize",
  },
]

const mappedFields = [
  {
    typeIcon: "title",
    name: "SEARCH ORDERS, PRODUCTS, CUST...",
    type: "TEXT",
    value: "Test value",
  },
  {
    typeIcon: "list",
    name: "LANGUAGE",
    type: "SELECT",
    value: "en",
  },
  {
    typeIcon: "title",
    name: "PRODUCT NAME",
    type: "TEXT",
    value: "Morgan Murphy",
  },
]

function QuickActionCard({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-white/5 rounded-xl p-3 text-left transition-colors"
    >
      <MaterialIcon name={icon} className="text-white/90 shrink-0" size={22} />
      <div className="min-w-0">
        <div className="text-[11px] font-bold text-white tracking-wide leading-tight">
          {title}
        </div>
        <div className="text-[10px] text-white/40 mt-0.5">{subtitle}</div>
      </div>
    </button>
  )
}

function MappedFieldCard({
  typeIcon,
  name,
  type,
  value,
}: {
  typeIcon: string
  name: string
  type: string
  value: string
}) {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-3 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0">
            <MaterialIcon
              name={typeIcon}
              className="text-white/50"
              size={16}
            />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold text-white tracking-wide truncate">
              {name}
            </div>
            <div className="text-[9px] text-white/35 font-semibold tracking-widest mt-0.5">
              {type}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/60 transition-colors"
            aria-label="Shuffle value"
          >
            <MaterialIcon name="shuffle" size={14} />
          </button>
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/60 transition-colors"
            aria-label="Remove field"
          >
            <MaterialIcon name="close" size={14} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-[#111] border border-white/5 rounded-lg px-3 py-2 text-[12px] text-white/70 truncate">
          {value}
        </div>
        <button
          type="button"
          className="bg-white text-black text-[11px] font-bold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors shrink-0"
        >
          Fill
        </button>
      </div>
    </div>
  )
}

export function ExtensionMockup() {
  return (
    <div className="w-full max-w-[380px] bg-[#0a0a0a] rounded-2xl border border-white/8 bento-card-shadow overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <Logo size="sm" showText textClassName="text-[18px] font-extrabold text-white tracking-tight" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-[#1e1e1e] hover:bg-[#282828] border border-white/8 text-white text-[10px] font-bold tracking-widest px-3 py-2 rounded-lg transition-colors"
          >
            SCAN PAGE
          </button>
          <button
            type="button"
            className="w-9 h-9 bg-[#1e1e1e] hover:bg-[#282828] border border-white/8 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Open sidebar"
          >
            <MaterialIcon name="dock_to_right" className="text-white/70" size={18} />
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action) => (
            <QuickActionCard key={action.title} {...action} />
          ))}
        </div>
      </div>

      {/* Mapped fields */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[13px] font-bold text-white">
            Mapped Fields
          </span>
          <span className="text-[11px] text-white/35">12 detected</span>
        </div>
        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1 extension-scroll">
          {mappedFields.map((field) => (
            <MappedFieldCard key={field.name} {...field} />
          ))}
        </div>
      </div>
    </div>
  )
}
