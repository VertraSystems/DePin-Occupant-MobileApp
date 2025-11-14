import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* ---------- ROOT LAYOUTS ---------- */

  appRoot: {
    flex: 1,
    backgroundColor: '#020307',
  },

  screenRoot: {
    flex: 1,
    backgroundColor: '#020307',
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 32,
    justifyContent: 'flex-start',
  },

  /* ---------- WELCOME / HERO ---------- */

  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 32,
  },

  heroImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  logoPressTarget: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  logoRipple: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#00ff88',
    zIndex: 2,
  },

  contentBelowLogo: {
    marginTop: 16,
  },

  appName: {
    color: '#21f28b',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginBottom: 8,
    textAlign: 'center',
  },

  heroText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },

  heroHighlight: {
    color: '#24ffa1',
  },

  heroSub: {
    color: '#a4b0c0',
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },

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
    paddingVertical: 14,
    borderRadius: 14,
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

  /* ---------- INTRO SLIDES (CREATE WALLET) ---------- */

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

  slideTapArea: {
    flex: 1,
  },

  slideCardContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  slideCard: {
    backgroundColor: '#050b11',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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

  /* ---------- GENERIC SECTION HEADERS ---------- */

  sectionTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },

  sectionSub: {
    color: '#9ea4b8',
    fontSize: 14,
    marginBottom: 24,
  },

  /* ---------- MNEMONIC / SECRET PHRASE ---------- */

  mnemonicHeader: {
    marginTop: 16,     // bumped down from top a bit
    marginBottom: 18,
  },

  mnemonicTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },

  mnemonicSub: {
    color: '#9ea4b8',
    fontSize: 14,
    marginBottom: 20,
  },

  mnemonicSubtitle: {
    color: '#9ea4b8',
    fontSize: 14,
    marginBottom: 20,
  },

  mnemonicCardOuter: {
    flex: 1,
    backgroundColor: '#050b11',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: '#181f30',
    marginBottom: 24,
  },

  mnemonicIntroCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  mnemonicIntroTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  mnemonicIntroBody: {
    color: '#9ea4b8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },

  mnemonicScroll: {
    flex: 1,
    marginBottom: 16,
  },

  mnemonicScrollContent: {
    paddingBottom: 8,
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

  mnemonicFooter: {
    gap: 12,
    marginBottom: 8,
  },

  /* ---------- PASSCODE SCREEN ---------- */

  passcodeRoot: {
    flex: 1,
    backgroundColor: '#020307',
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 32,
  },

  passcodeHeader: {
    marginBottom: 32,
  },

  passcodeHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  passcodeBackHitArea: {
    paddingRight: 8,
    paddingVertical: 4,
    marginRight: 4,
  },

  passcodeBackIcon: {
    color: '#9ea4b8',
    fontSize: 18,
  },

  passcodeTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
  },

  passcodeSubtitle: {
    color: '#9ea4b8',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },

  passcodeBody: {
    flex: 1,
    justifyContent: 'center',
  },

  passcodeDotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },

  passcodeDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#303446',
  },

  passcodeDotFilled: {
    backgroundColor: '#19e470',
    borderColor: '#19e470',
  },

  passcodeToggleRow: {
    alignItems: 'center',
    marginBottom: 8,
  },

  passcodeToggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#050b11',
    borderWidth: 1,
    borderColor: '#262a3c',
  },

  passcodeToggleIcon: {
    fontSize: 14,
    marginRight: 6,
    color: '#d6daff',
  },

  passcodeToggleText: {
    color: '#d6daff',
    fontSize: 12,
    fontWeight: '500',
  },

  passcodePlainText: {
    marginTop: 6,
    textAlign: 'center',
    color: '#9ea4b8',
    letterSpacing: 4,
    fontSize: 16,
  },

  keypadGrid: {
    marginTop: 28,
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },

  keypadPressable: {
    width: '30%',
    alignItems: 'center',
  },

  keypadKey: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 20,
    backgroundColor: '#181c27',
    borderWidth: 1,
    borderColor: '#303446',
    alignItems: 'center',
    justifyContent: 'center',
  },

  keypadKeyText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },

  keypadSpacer: {
    width: '30%',
  },

  keypadKeyIcon: {
    color: '#ffffff',
    fontSize: 18,
  },

  passcodeFooter: {
    marginTop: 24,
  },

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

  passcodeShowButton: {
    marginTop: 12,
    alignSelf: 'center',
  },

  passcodeShowText: {
    color: '#8f96b2',
    fontSize: 13,
  },

  /* ---------- BIOMETRICS SCREEN ---------- */

  biometricsHeader: {
    marginTop: 16,
    marginBottom: 32,
  },

  biometricsLockArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lockCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#11121d',
    borderWidth: 1,
    borderColor: '#262a3c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lockShackle: {
    width: 74,
    height: 44,
    borderRadius: 22,
    borderWidth: 6,
    borderColor: '#f2f4ff',
    borderBottomWidth: 0,
    marginBottom: -10,
  },

  lockBody: {
    width: 96,
    height: 80,
    borderRadius: 18,
    backgroundColor: '#f2f4ff',
  },

  biometricsButtons: {
    marginTop: 24,
    marginBottom: 12,
    gap: 12,
  },

  /* ---------- NOTIFICATIONS SCREEN ---------- */


  notificationsBody: {
    flex: 1,
    justifyContent: 'center',
  },


  /* ---------- TOGGLE BUTTONS (BIOMETRICS / NOTIFS) ---------- */

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


    // wrapper for centering header + choice
  notificationsCenter: {
    flex: 1,
    justifyContent: 'center',
  },

  notificationsHeader: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  notificationsTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },

  notificationsSub: {
    color: '#9ea4b8',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },

  notificationsChoiceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },

  notificationsChoiceButton: {
    flex: 1,
    maxWidth: 160,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#303446',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050b11',
  },

  notificationsChoiceButtonActive: {
    backgroundColor: '#19e47022',
    borderColor: '#19e470',
  },

  notificationsChoiceText: {
    color: '#d6daff',
    fontSize: 15,
    fontWeight: '600',
  },

  notificationsChoiceTextActive: {
    color: '#ffffff',
  },

  notificationsFooter: {
    marginTop: 24,
  },
});
