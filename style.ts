import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* ---------- ROOT LAYOUTS ---------- */

  appRoot: {
    flex: 1,
    backgroundColor: '#020307', // default dark background
  },

  screenRoot: {
    flex: 1,
    backgroundColor: '#020307',
    paddingHorizontal: 20,
    paddingTop: 52,     // overall content slightly down from very top
    paddingBottom: 32,
    justifyContent: 'flex-start',
  },

  /* ---------- HERO / BRANDING (WELCOME SCREEN) ---------- */

  // Glowing green layer that sits behind the hero card
  heroGlow: {
    position: 'absolute',
    top: 32,
    left: 20,
    right: 20,
    height: 280,                 // taller glow area
    borderRadius: 36,
    backgroundColor: '#00d26a',
    opacity: 0,
    shadowColor: '#00ff88',
    shadowOpacity: 0.7,
    shadowRadius: 42,
    shadowOffset: { width: 0, height: 0 },
  },

  heroCard: {
    backgroundColor: '#00d26a',  // green card
    borderRadius: 36,
    paddingVertical: 56,         // taller card
    paddingHorizontal: 24,
    marginBottom: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00ff88',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },

  heroImage: {
    width: 170,                  // slightly smaller logo
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  appName: {
    color: '#21f28b',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginTop: 16,               // pushes header down from the card
    marginBottom: 6,
  },

  heroText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
  },

  heroHighlight: {
    color: '#24ffa1',
  },

  heroSub: {
    color: '#a4b0c0',
    fontSize: 14,
    marginBottom: 0,
  },

  // legacy logo (unused but kept)
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1e2235',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },

  /* ---------- BUTTONS ---------- */

  buttonColumn: {
    gap: 12,
    marginTop: 44,              // buttons sit lower on the screen
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },

  primaryButton: {
    backgroundColor: '#19e470',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#020307',
    fontSize: 16,
    fontWeight: '700',
  },

  primaryButtonOnGreen: {
    backgroundColor: '#020307',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#020307',
  },
  primaryButtonTextOnGreen: {
    color: '#ffffff',
  },

  secondaryButton: {
    borderColor: '#364451',
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#d6daff',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryButtonOnGreen: {
    backgroundColor: 'transparent',
    borderColor: '#020307',
  },
  secondaryButtonTextOnGreen: {
    color: '#020307',
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  /* ---------- SLIDES / STORIES ---------- */

  storyProgressRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 16,
  },
  storyBar: {
    flex: 1,
    height: 3,
    borderRadius: 999,
    backgroundColor: '#252836',
  },
  storyBarActive: {
    backgroundColor: '#24ffa1',
  },

  slideCard: {
    backgroundColor: '#050b11',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#18ff7644',
  },
  slideIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  slideTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  slideSubtitle: {
    color: '#a3aac5',
    fontSize: 14,
    textAlign: 'center',
  },

  slideDotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#272a3c',
  },
  dotActive: {
    backgroundColor: '#24ffa1',
  },

  /* ---------- SECTION HEADERS ---------- */

  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  sectionSub: {
    color: '#9ea4b8',
    fontSize: 14,
    marginBottom: 24,
  },

  /* ---------- MNEMONIC GRID ---------- */

  mnemonicScroll: {
    flex: 1,
    marginBottom: 16,
  },
  mnemonicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  mnemonicWordBox: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#050b11',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#141927',
  },
  mnemonicIndex: {
    color: '#7c82a0',
    fontSize: 12,
    marginRight: 4,
  },
  mnemonicWord: {
    color: '#ffffff',
    fontSize: 14,
  },

  /* ---------- PASSCODE ---------- */

  passcodeInput: {
    backgroundColor: '#050b11',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#181f30',
  },

  /* ---------- TOGGLE BUTTONS ---------- */

  toggleButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3b3f55',
    alignItems: 'center',
  },
  toggleButtonSelected: {
    backgroundColor: '#19e47022',
    borderColor: '#19e470',
  },
  toggleButtonText: {
    color: '#c4c8e0',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleButtonTextSelected: {
    color: '#ffffff',
  },

  /* ---------- MAIN WALLET TOP BAR ---------- */

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  walletSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#050b11',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#202838',
  },
  walletSelectorLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  chevron: {
    color: '#9ea4b8',
    fontSize: 12,
    marginLeft: 6,
  },
  moreButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#303449',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreDots: {
    color: '#d4d7ea',
    fontSize: 20,
    marginTop: -4,
  },

  /* ---------- BALANCE CARD ---------- */

  balanceCard: {
    backgroundColor: '#050b11',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#181f30',
  },
  balanceLabel: {
    color: '#a1a6c4',
    fontSize: 13,
    marginBottom: 6,
  },
  balanceValue: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
  balanceSub: {
    color: '#7e83a0',
    fontSize: 13,
    marginTop: 4,
  },

  dailyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dailyLabel: {
    color: '#a0a6c0',
    fontSize: 13,
  },
  dailyValue: {
    color: '#24ffa1',
    fontSize: 13,
    fontWeight: '700',
  },

  /* ---------- ACTION GRID ---------- */

  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    width: '22%',
    backgroundColor: '#050b11',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#181f30',
  },
  actionIconPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111c1b',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionIconText: {
    color: '#24ffa1',
    fontWeight: '700',
  },
  actionLabel: {
    color: '#d5d8f0',
    fontSize: 11,
    textAlign: 'center',
  },

  /* ---------- DEBUG NOTE ---------- */

  debugNote: {
    marginTop: 16,
    color: '#6e748f',
    fontSize: 11,
  },
});
