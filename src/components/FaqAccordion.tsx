import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqList } from '../data/solutionsData';

export const FaqAccordion: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" style={{ maxWidth: '860px', margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-green)', fontWeight: 600 }}>
            {t.faq.kicker}
          </div>
          <h2 style={{ margin: 0, fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {t.faq.title}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqList.map((item) => {
            const isOpen = openIds.includes(item.id);
            const question = language === 'en' ? item.questionEn : item.questionPt;
            const answer = language === 'en' ? item.answerEn : item.answerPt;

            return (
              <div key={item.id} className="faq-item">
                <div
                  className="faq-header"
                  onClick={() => toggleItem(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleItem(item.id);
                    }
                  }}
                >
                  <span>{question}</span>
                  <span
                    style={{
                      color: 'var(--accent-green)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '18px',
                      userSelect: 'none',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <div
                    className="faq-body"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
