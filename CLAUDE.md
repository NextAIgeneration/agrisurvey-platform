# CLAUDE.md - AgriSurvey Platform

**Last Updated**: 25 Octobre 2025 - Optimisation Charte Graphique
**Project Status**: ✅ Production Ready (Vercel deployed)

---

## 📋 SESSION RÉCENTE (25 Oct 2025 - Optimisation Visuelle)

### **Charte Graphique 3ème Couleur Complémentaire**

**Visual Enhancement Applied:**
- ✅ Added 3rd complementary color (Gold #FFD700) to title styling
- ✅ Added `WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)'` for nature text outline
- ✅ Added `filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4))'` for gold depth
- ✅ Enhanced textShadow system with 3 layers:
  - Layer 1: Magenta shadow (close + visible) - 0.25 alpha
  - Layer 2: Magenta diffuse (far + soft) - 0.15 alpha
  - Layer 3: Gold glow (omnidirectional NEW) - 0.35 alpha

**Color Palette (Triadic):**
```yaml
Primary: Green #2ECC71 (gradient)
2nd Complementary: Magenta #E02E71 (directional shadow)
3rd Complementary: Gold #FFD700 (terroir naturel + harvest theme)
```

**Visual Impact:**
- ⬡ Drone icon + nature harmonious with golden warmth
- Gold represents terroir, harvest, agricultural value
- Tech/nature balance reinforced
- Enhanced distinction for basic logo

**Reference:**
- Exemplar pattern: COSMIC RAG GitHub
- Documentation: `/Users/enzoxic/Documents/fft-mercure-vault/📝 Notes/🎨 CHARTE GRAPHIQUE - 3ème Couleur Complémentaire.md`

**Commits:**
- `839b896` - style: Add 3rd complementary color
- Pushed to GitHub + GitLab successfully
- Build successful: 12 pages generated (1558.0ms)

---

## 🚀 ARCHITECTURE ACTUELLE

### **Tech Stack**
```yaml
Frontend: Next.js 16.0 + React 19.2 + TypeScript
Styling: Tailwind CSS 4.0
Deployment: Vercel (auto-deploy from GitHub)
Repository:
  GitHub: github.com/NextAIgeneration/agrisurvey-platform
  GitLab: gitlab.com/enzoxic03/agrisurvey-platform
```

### **Key Features**
- 🚁 Drone surveys (RGB + multispectral imagery)
- 📊 AI crop health analysis (NDVI, NDRE, disease detection)
- 📍 Field mapping (precision agriculture)
- 📈 Yield prediction analytics
- 🌾 Terroir & biodiversity monitoring

### **Color Scheme**
```yaml
Primary: Green #2ECC71 → #27AE60 (nature, agriculture)
Background: Dark green #1a2a1a → #0f1f0f → #0a1a0a
Accent: Light green #81C784
2nd Complementary: Magenta #E02E71 (tech contrast)
3rd Complementary: Gold #FFD700 (harvest, terroir)
```

---

## 🎯 USE CASES

1. **🌾 Precision Agriculture** - Large farms (100-500ha) - Yield optimization +15-25%
2. **🍇 Viticulture Terroir** - Vineyards (10-50ha) - Quality AOC monitoring
3. **🌳 Forestry Management** - Forests (500-5000ha) - Biodiversity + carbon credits
4. **🏛️ Heritage & Tourism** - Historic agricultural sites - Synergy with econergy Platform

---

## 🎨 CHARTE GRAPHIQUE - COHÉRENCE COSMIC

| Projet | Couleur Primary | 2nd Complementary | 3rd Complementary |
|--------|----------------|-------------------|-------------------|
| COSMIC RAG | Magenta #E035A2 | Cyan #00E0A2 | - (already optimal) |
| CitizenHub | Blue #1565C0 | Orange #FF9800 | White #FFF + Cyan #00E5FF |
| **AgriSurvey** | **Green #2ECC71** | **Magenta #E02E71** | **Gold #FFD700** |
| econergy | Orange #FF9800 | Cyan #0098FF | Gold #FFD700 |
| LearnAI | Light Blue #3498DB | Orange #FF9800 | Violet #E1BEE7 |

**Documentation:** See `🎨 CHARTE GRAPHIQUE - 3ème Couleur Complémentaire.md` in Obsidian vault

---

## 🔗 URLS IMPORTANTES

**Production:**
- Vercel: https://agrisurvey-platform.vercel.app (or enzoxics-projects subdomain)

**Repositories:**
- GitHub: https://github.com/NextAIgeneration/agrisurvey-platform
- GitLab: https://gitlab.com/enzoxic03/agrisurvey-platform

---

## 📋 BACKLOG / TODO

### **Court-terme (Cette Semaine)**
- [ ] Create architecture pages (similar to econergy)
- [ ] Add drone hardware specifications section
- [ ] Create README.md
- [ ] Add GitHub About section (description, topics, website)

### **Moyen-terme (Ce Mois)**
- [ ] Setup SEO metadata (OpenGraph, Twitter Cards)
- [ ] Create Adobe CC assets (logo, OG images, favicons)
- [ ] Setup Vercel Analytics
- [ ] Configure GitLab CI/CD pipeline

### **Long-term (Q4 2025)**
- [ ] Pilot project case study (vineyard or farm)
- [ ] Integration with econergy (heritage tourism synergy)
- [ ] Blog post (AgriTech + COSMIC EU 2025)

---

## 💡 NOTES IMPORTANTES

**Drone Technology:**
- RGB cameras (visual inspection)
- Multispectral sensors (NDVI, NDRE crop health)
- Flight altitude: 50-120m AGL
- Resolution: 2-5cm per pixel
- Coverage: 50-100ha per flight

**AI Analysis:**
- Crop health scoring (0-100)
- Disease detection (early warning)
- Yield prediction (tons/ha)
- Biodiversity index (ecological balance)

**Synergies COSMIC:**
- econergy → Patrimoine & Tourisme (agricultural heritage sites)
- Shared terroir + sustainability themes

---

## 🤝 COLLABORATION

**Working with Claude Code:**
- Always read CLAUDE.md before major changes
- Update this file after significant work
- Use conventional commits (feat:, fix:, docs:, style:)
- Test locally before pushing to production

**Git Workflow:**
```bash
# Local work
git add -A
git commit -m "type: description"

# Push to both remotes
git push github main
git push gitlab main
```

---

**Next Session**: Documentation + Architecture Pages Creation
**Status**: 🟢 PRODUCTION READY
**Confidence**: 💯 100%
