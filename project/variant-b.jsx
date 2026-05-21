// Variation B — "Open Slide" (1920×1080)
// Generous whitespace, sans display, a gold vertical bar instead of a black
// footer. Section numbers are big italic gold serifs in the left margin.

const { useRef: useRefB } = React;
const WSB = window.WSCore;

const styleB = {
  root: {
    background: "var(--vu-paper)",
    display: "grid",
    gridTemplateColumns: "16px 1fr",
  },
  goldBar: { background: "linear-gradient(180deg, var(--vu-gold-d), var(--vu-gold))" },
  inner: { padding: "72px 100px 60px 80px", display: "flex", flexDirection: "column" },

  eyebrow: {
    display: "flex", alignItems: "center", gap: 14,
    fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--vu-muted)", fontWeight: 700,
  },
  eyebrowGold: { color: "var(--vu-oak)" },

  title: {
    margin: "20px 0 0",
    fontFamily: "var(--sans)",
    fontSize: 110, lineHeight: 0.92, letterSpacing: "-0.045em",
    fontWeight: 700, color: "var(--vu-black)",
  },
  intro: {
    margin: "26px 0 0", maxWidth: 1180,
    fontSize: 19, lineHeight: 1.55, color: "var(--vu-ink)",
  },

  body: { marginTop: 50, flex: 1, display: "flex", flexDirection: "column", gap: 30 },

  section: {
    display: "grid", gridTemplateColumns: "110px 1fr", gap: 36,
    paddingTop: 24, borderTop: "1px solid var(--vu-rule)",
  },
  numCol: {
    fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 600,
    color: "var(--vu-gold-d)", fontSize: 64, lineHeight: 1,
    letterSpacing: "-0.02em",
  },
  sectionTitle: {
    fontFamily: "var(--sans)", fontSize: 22, fontWeight: 700,
    color: "var(--vu-black)", margin: 0, letterSpacing: "-0.01em",
  },
  sectionLead: {
    margin: "4px 0 0", fontSize: 17, color: "var(--vu-muted)", lineHeight: 1.4,
  },

  chipRow: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 },

  sentence: {
    margin: "14px 0 0", fontSize: 22, lineHeight: 1.5, color: "var(--vu-ink)",
  },

  twoUp: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 },

  finalRow: {
    marginTop: 24, paddingTop: 28, borderTop: "1px solid var(--vu-rule)",
  },
  finalSentence: {
    margin: 0, fontSize: 26, lineHeight: 1.55, fontFamily: "var(--sans)",
    fontWeight: 500, color: "var(--vu-ink)",
  },

  principles: {
    marginTop: 36, padding: "24px 28px",
    background: "var(--vu-cream)",
    border: "1px solid var(--vu-sand)",
    borderLeft: "5px solid var(--vu-gold-d)",
    borderRadius: 4,
    display: "grid", gridTemplateColumns: "180px 1fr", gap: 28,
  },
  principlesLabel: {
    fontFamily: "var(--serif)", fontStyle: "italic",
    fontSize: 22, color: "var(--vu-oak)", lineHeight: 1.2,
  },
  principlesCopy: { margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--vu-ink)" },
};

// Chip override for B: outlined, no fill — feels lighter and more "academic"
const chipBStyle = {
  background: "transparent",
  borderColor: "var(--vu-ink)",
  borderWidth: 1.5,
  fontWeight: 500,
};

function VariantB() {
  const [s, set] = WSB.useWorksheetState("B");
  const targetRef = useRefB(null);

  const numStr = (n) => String(n).padStart(2, "0");

  return (
    <div ref={targetRef} className="ws" style={styleB.root}>
      <WSB.ExportButton getTarget={() => targetRef.current} pageClass="print-slide" />
      <div style={styleB.goldBar}></div>

      <div style={styleB.inner}>
        <header>
          <div style={styleB.eyebrow}>
            <span>Vanderbilt Peabody College</span>
            <span style={{ opacity: 0.4 }}>—</span>
            <span style={styleB.eyebrowGold}>LLO 8230: Program Evaluation</span>
          </div>
          <h1 style={styleB.title}>Evaluation Purpose.</h1>
          <p style={styleB.intro}>{WSB.INTRO_COPY}</p>
        </header>

        <div style={styleB.body}>
          {/* 01 — primary purpose */}
          <section style={styleB.section}>
            <div style={styleB.numCol}>{numStr(1)}</div>
            <div>
              <h2 style={styleB.sectionTitle}>Primary purpose</h2>
              <p style={styleB.sectionLead}>Select the evaluation type(s) that fit. Hover any chip for its definition.</p>
              <div style={{ marginTop: 14 }}>
                <WSB.CategoryGroup
                  selected={s.purposeCategories}
                  onToggle={(id) => set(prev => ({
                    ...prev,
                    purposeCategories: prev.purposeCategories.includes(id)
                      ? prev.purposeCategories.filter(x => x !== id)
                      : [...prev.purposeCategories, id],
                  }))}
                />
              </div>
              <p style={styleB.sentence}>
                The primary purpose of this evaluation is to&nbsp;
                <WSB.Blank value={s.purposeSentence}
                           onChange={(x) => set({ purposeSentence: x })}
                           placeholder="full purpose statement" minWidth={640} />.
              </p>
            </div>
          </section>

          {/* 02 — users & uses */}
          <section style={styleB.section}>
            <div style={styleB.numCol}>{numStr(2)}</div>
            <div style={styleB.twoUp}>
              <div>
                <h2 style={styleB.sectionTitle}>Intended users</h2>
                <p style={styleB.sectionLead}>The intended users of the evaluation findings are:</p>
                <div style={styleB.chipRow}>
                  <WSB.EditableChipList
                    items={s.users}
                    onChange={(arr) => set({ users: arr })}
                    placeholder={(i) => `user ${i + 1}`}
                    chipStyle={chipBStyle}
                    addLabel="Add user"
                  />
                </div>
              </div>
              <div>
                <h2 style={styleB.sectionTitle}>Use of findings</h2>
                <p style={styleB.sectionLead}>These findings will be used to inform decisions or next steps:</p>
                <div style={styleB.chipRow}>
                  <WSB.EditableChipList
                    items={s.uses}
                    onChange={(arr) => set({ uses: arr })}
                    placeholder={(i) => `use ${i + 1}`}
                    chipStyle={chipBStyle}
                    addLabel="Add use"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 03 — aim & ultimately */}
          <section style={{ ...styleB.section, ...styleB.finalRow }}>
            <div style={styleB.numCol}>{numStr(3)}</div>
            <div>
              <h2 style={styleB.sectionTitle}>Near-term aim &amp; ultimate goal</h2>
              <p style={styleB.finalSentence}>
                By completing this evaluation, we aim to&nbsp;
                <WSB.Blank value={s.aim} onChange={(x) => set({ aim: x })}
                           placeholder="near-term aim" minWidth={340} />
                &nbsp;and ultimately to&nbsp;
                <WSB.Blank value={s.ultimately} onChange={(x) => set({ ultimately: x })}
                           placeholder="ultimate goal" minWidth={340} />.
              </p>
            </div>
          </section>
        </div>

        <aside style={styleB.principles}>
          <div style={styleB.principlesLabel}>Operating<br/>Principles</div>
          <p style={styleB.principlesCopy}>{WSB.OPERATING_PRINCIPLES_HTML}</p>
        </aside>
      </div>
    </div>
  );
}

window.VariantB = VariantB;
