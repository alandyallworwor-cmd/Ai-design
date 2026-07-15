import { AppHeader } from '../components/AppHeader';
import { glossary, type GlossaryTerm } from '../data/glossary';

interface GlossaryScreenProps {
  xp: number;
  onBack: () => void;
}

// The order the term groups appear in.
const GROUPS: GlossaryTerm['group'][] = [
  'Intellectual Property',
  'Privacy & Ethics',
  'Teamwork',
];

/** A simple, scrollable list of IT terms and their meanings. */
export function GlossaryScreen({ xp, onBack }: GlossaryScreenProps) {
  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onBack} />
      <main className="glossary">
        <h2 className="glossary__heading">Glossary</h2>
        <p className="glossary__intro">Key IT terms from your Week 1 notes.</p>

        {GROUPS.map((group) => (
          <section key={group} className="glossary__group">
            <h3 className="glossary__group-title">{group}</h3>
            <dl className="glossary__list">
              {glossary
                .filter((item) => item.group === group)
                .map((item) => (
                  <div key={item.term} className="glossary__item">
                    <dt className="glossary__term">{item.term}</dt>
                    <dd className="glossary__meaning">{item.meaning}</dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </main>
    </div>
  );
}
