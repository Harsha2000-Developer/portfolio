import type { SummaryData } from '@/types/content';

// Fixed editor palette: the card stays dark in both themes, like a real editor window.
const tones = {
  plain: '',
  keyword: 'text-[#818cf8]',
  string: 'text-[#34d399]',
  type: 'text-[#f9a8d4]',
  comment: 'text-[#56627a]',
} as const;

type Token = [text: string, tone?: keyof typeof tones];
type Line = Token[];

/** Builds the snippet as data so indentation never depends on JSX whitespace rules. */
function buildLines(summary: SummaryData): Line[] {
  const shortName = summary.name.split(' ').slice(0, 2).join(' ');
  const str = (s: string): Token => [`"${s}"`, 'string'];
  return [
    [['public record ', 'keyword'], ['Engineer', 'type'], ['(']],
    [['  String name,']],
    [['  String role,']],
    [['  List<String> focus']],
    [[') {}']],
    [],
    [['// currently', 'comment']],
    [['var', 'keyword'], [' me = '], ['new ', 'keyword'], ['Engineer', 'type'], ['(']],
    [['  '], str(shortName), [',']],
    [['  '], str(summary.role), [',']],
    [['  List.of(']],
    ...summary.focus.map((f, i): Line => [['    '], str(f), [i < summary.focus.length - 1 ? ',' : '']]),
    [['  )']],
    [[');']],
    [],
    [['me.ship(); '], ['// ✔ build passing', 'comment']],
  ];
}

export function CodeCard({ summary }: { summary: SummaryData }) {
  const lines = buildLines(summary);
  return (
    <figure
      aria-label="Code snippet describing my profile"
      className="overflow-hidden rounded-2xl border border-[#1e2a45] bg-[#0f1526] shadow-(--shadow)"
    >
      <div className="flex items-center gap-[7px] border-b border-[#1e2a45] px-4 py-3.5" aria-hidden="true">
        <i className="size-[11px] rounded-full bg-[#ff5f57]" />
        <i className="size-[11px] rounded-full bg-[#febc2e]" />
        <i className="size-[11px] rounded-full bg-[#28c840]" />
        <span className="ml-2.5 font-mono text-xs text-[#8b96ad]">engineer.java</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13.5px] leading-7 text-[#c7d0e0]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block min-h-7">
              {line.map(([text, tone = 'plain'], j) => (
                <span key={j} className={tones[tone]}>
                  {text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
