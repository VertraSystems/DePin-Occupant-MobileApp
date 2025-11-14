// style.ts
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
  heroImage: { width: 200, height: 200, resizeMode: 'contain' },
  logoPressTarget: { width: 200, height: 200, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  logoRipple: { position: 'absolute', width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: '#00ff88', zIndex: 2 },
  contentBelowLogo: { marginTop: 16 },
  appName: { color: '#21f28b', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1.6, marginBottom: 8, textAlign: 'center' },
  heroText: { color: '#ffffff', fontSize: 26, fontWeight: '800', marginBottom: 8, textAlign: 'center' },
  heroHighlight: { color: '#24ffa1' },
  heroSub: { color: '#a4b0c0', fontSize: 14, marginBottom: 24, textAlign: 'center' },
  logoCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#1e2235', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  logoText: { color: '#ffffff', fontSize: 28, fontWeight: '800' },

  /* ---------- BUTTONS ---------- */
  buttonColumn: { gap: 12 },
  buttonRow: { flexDirection: 'row', gap: 12, marginTop: 24 },
  primaryButton: { backgroundColor: '#19e470', paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  primaryButtonText: { color: '#020307', fontSize: 16, fontWeight: '700' },
  primaryButtonOnGreen: { backgroundColor: '#020307', paddingVertical: 14, borderRadius: 14, alignItems: 'center', borderWidth: 1, borderColor: '#020307' },
  primaryButtonTextOnGreen: { color: '#ffffff' },
  secondaryButton: { borderColor: '#364451', borderWidth: 1, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  secondaryButtonText: { color: '#d6daff', fontSize: 16, fontWeight: '600' },
  secondaryButtonOnGreen: { backgroundColor: 'transparent', borderColor: '#020307' },
  secondaryButtonTextOnGreen: { color: '#020307' },
  buttonDisabled: { opacity: 0.4 },

  /* ---------- INTRO SLIDES (CREATE WALLET) ---------- */
  storyProgressRow: { flexDirection: 'row', gap: 4, marginBottom: 16 },
  storyBar: { flex: 1, height: 3, borderRadius: 999, backgroundColor: '#252836' },
  storyBarActive: { backgroundColor: '#24ffa1' },
  slideTapArea: { flex: 1, justifyContent: 'center' },
  slideCardContainer: { paddingHorizontal: 4 },
  slideCard: { backgroundColor: '#032715', borderRadius: 24, paddingHorizontal: 24, paddingVertical: 32, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#19e47066', minHeight: '70%' },
  slideIcon: { fontSize: 46, marginBottom: 18 },
  slideTitle: { color: '#ffffff', fontSize: 24, fontWeight: '800', marginBottom: 10, textAlign: 'center' },
  slideSubtitle: { color: '#d7e4f0', fontSize: 15, textAlign: 'center', lineHeight: 22 },
  slideDotsRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 16 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#272a3c' },
  dotActive: { backgroundColor: '#24ffa1' },

  /* ---------- GENERIC SECTION HEADERS ---------- */
  sectionTitle: { color: '#ffffff', fontSize: 24, fontWeight: '800', marginBottom: 6 },
  sectionSub: { color: '#9ea4b8', fontSize: 14, marginBottom: 24 },

  /* ---------- MNEMONIC / SECRET PHRASE ---------- */
  mnemonicHeader: { marginBottom: 20, alignItems: 'center' },
  mnemonicHeaderTitle: { color: '#ffffff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  mnemonicHeaderSub: { color: '#9ea4b8', fontSize: 13, textAlign: 'center' },
  mnemonicCardOuter: { flex: 1, backgroundColor: '#050b11', borderRadius: 24, paddingHorizontal: 20, paddingVertical: 24, borderWidth: 1, borderColor: '#181f30', marginBottom: 24 },
  mnemonicCardHidden: { backgroundColor: '#050b11' },
  mnemonicIntroCard: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  mnemonicIntroTitle: { color: '#ffffff', fontSize: 18, fontWeight: '700', marginBottom: 8 },
  mnemonicIntroBody: { color: '#9ea4b8', fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 20 },
  mnemonicShowRow: { marginTop: 16, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999, borderWidth: 1, borderColor: '#262a3c', backgroundColor: '#050b11' },
  mnemonicShowIcon: { fontSize: 14, marginRight: 6, color: '#d6daff' },
  mnemonicShowLabel: { color: '#d6daff', fontSize: 13, fontWeight: '500' },
  mnemonicScroll: { flex: 1, marginBottom: 16 },
  mnemonicScrollContent: { paddingBottom: 8 },
  mnemonicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  mnemonicWordBox: { width: '46%', flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 10, backgroundColor: '#050b11', borderRadius: 10, borderWidth: 1, borderColor: '#141927' },
  mnemonicIndex: { color: '#7c82a0', fontSize: 12, marginRight: 6 },
  mnemonicWord: { color: '#ffffff', fontSize: 14 },

  /* ---------- MNEMONIC CONFIRM (3-word quiz) ---------- */
  mnemonicConfirmHeader: { marginBottom: 24, alignItems: 'center' },
  mnemonicConfirmTitle: { color: '#ffffff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  mnemonicConfirmSub: { color: '#9ea4b8', fontSize: 13, textAlign: 'center' },
  mnemonicConfirmForm: { flex: 1, justifyContent: 'center' },
  mnemonicConfirmRow: { marginBottom: 16 },
  mnemonicConfirmLabel: { color: '#9ea4b8', fontSize: 13, marginBottom: 6 },
  mnemonicConfirmInput: { borderRadius: 12, borderWidth: 1, borderColor: '#181f30', backgroundColor: '#050b11', paddingVertical: 10, paddingHorizontal: 12, color: '#ffffff', fontSize: 16 },
  mnemonicConfirmError: { marginTop: 8, color: '#ff6b6b', textAlign: 'center', fontSize: 13 },

  /* ---------- PASSCODE SCREEN ---------- */
  passcodeRoot: { flex: 1, backgroundColor: '#020307', paddingHorizontal: 24, paddingTop: 96, paddingBottom: 32 },
  passcodeHeader: { marginBottom: 32 },
  passcodeTitle: { color: '#ffffff', fontSize: 28, fontWeight: '800', marginBottom: 10 },
  passcodeSubtitle: { color: '#9ea4b8', fontSize: 15, lineHeight: 22 },
  passcodeBody: { flex: 1, justifyContent: 'center' },
  passcodeDotsRow: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 20 },
  passcodeDot: { width: 14, height: 14, borderRadius: 7, borderWidth: 2, borderColor: '#303446' },
  passcodeDotFilled: { backgroundColor: '#19e470', borderColor: '#19e470' },
  passcodeToggleRow: { alignItems: 'center', marginBottom: 8 },
  passcodeToggleBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, backgroundColor: '#050b11', borderWidth: 1, borderColor: '#262a3c' },
  passcodeToggleIcon: { fontSize: 14, marginRight: 6, color: '#d6daff' },
  passcodeToggleText: { color: '#d6daff', fontSize: 12, fontWeight: '500' },
  passcodePlainText: { marginTop: 6, textAlign: 'center', color: '#9ea4b8', letterSpacing: 4, fontSize: 16 },
  keypadGrid: { marginTop: 28, alignSelf: 'stretch', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 12 },
  keypadPressable: { width: '30%', alignItems: 'center' },
  keypadKey: { width: '100%', aspectRatio: 1.7, borderRadius: 22, backgroundColor: '#181c27', borderWidth: 1, borderColor: '#303446', alignItems: 'center', justifyContent: 'center' },
  keypadKeyText: { color: '#ffffff', fontSize: 24, fontWeight: '600' },
  keypadSpacer: { width: '30%' },
  keypadKeyIcon: { color: '#ffffff', fontSize: 20 },
  passcodeFooter: { marginTop: 24 },
  passcodeInput: { backgroundColor: '#050b11', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16, color: '#ffffff', fontSize: 20, letterSpacing: 4, marginBottom: 24, borderWidth: 1, borderColor: '#181f30' },
  passcodeShowButton: { marginTop: 12, alignSelf: 'center' },
  passcodeShowText: { color: '#8f96b2', fontSize: 13 },

  /* ---------- BIOMETRICS SCREEN ---------- */
  biometricsContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  biometricsTextBlock: { paddingHorizontal: 24, marginBottom: 24 },
  biometricsTitle: { color: '#ffffff', fontSize: 26, fontWeight: '800', textAlign: 'center', marginBottom: 8 },
  biometricsSubtitle: { color: '#9ea4b8', fontSize: 14, lineHeight: 20, textAlign: 'center' },
  biometricsVideoWrapper: { alignItems: 'center', justifyContent: 'center' },
  biometricsVideo: { width: 180, height: 180, borderRadius: 90, overflow: 'hidden', backgroundColor: '#050b11' },
  biometricsFooter: { paddingTop: 8, gap: 12 },
  biometricsToggleRow: { flexDirection: 'row', gap: 12 },

  /* ---------- NOTIFICATIONS SCREEN ---------- */
  notificationsBody: { flex: 1, justifyContent: 'center' },

  /* ---------- TOGGLE BUTTONS ---------- */
  toggleButton: { flex: 1, paddingVertical: 14, borderRadius: 12, borderWidth: 1, borderColor: '#3b3f55', alignItems: 'center' },
  toggleButtonSelected: { backgroundColor: '#19e47022', borderColor: '#19e470' },
  toggleButtonText: { color: '#c4c8e0', fontSize: 14, fontWeight: '600' },
  toggleButtonTextSelected: { color: '#ffffff' },

  /* ---------- MAIN WALLET TOP BAR ---------- */
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  walletSelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#050b11', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1, borderColor: '#202838' },
  walletSelectorLabel: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  chevron: { color: '#9ea4b8', fontSize: 12, marginLeft: 6 },
  moreButton: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: '#303449', alignItems: 'center', justifyContent: 'center' },
  moreDots: { color: '#d4d7ea', fontSize: 20, marginTop: -4 },

  /* ---------- BALANCE CARD ---------- */
  balanceCard: { backgroundColor: '#050b11', borderRadius: 18, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: '#181f30' },
  balanceLabel: { color: '#a1a6c4', fontSize: 13, marginBottom: 6 },
  balanceValue: { color: '#ffffff', fontSize: 28, fontWeight: '800' },
  balanceSub: { color: '#7e83a0', fontSize: 13, marginTop: 4 },
  dailyRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  dailyLabel: { color: '#a0a6c0', fontSize: 13 },
  dailyValue: { color: '#24ffa1', fontSize: 13, fontWeight: '700' },

  /* ---------- ACTION GRID ---------- */
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  actionButton: { width: '22%', backgroundColor: '#050b11', borderRadius: 16, paddingVertical: 12, paddingHorizontal: 6, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#181f30' },
  actionIconPlaceholder: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#111c1b', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  actionIconText: { color: '#24ffa1', fontWeight: '700' },
  actionLabel: { color: '#d5d8f0', fontSize: 11, textAlign: 'center' },

  /* ---------- DEBUG NOTE ---------- */
  debugNote: { marginTop: 16, color: '#6e748f', fontSize: 11 },

  /* ---------- NOTIFICATIONS ---------- */
  notificationsCenter: { flex: 1, justifyContent: 'center' },
  notificationsHeader: { alignItems: 'center', paddingHorizontal: 16, marginBottom: 24 },
  notificationsSub: { color: '#9ea4b8', fontSize: 15, lineHeight: 22, textAlign: 'center' },
  notificationsChoiceRow: { flexDirection: 'row', justifyContent: 'center', gap: 16 },
  notificationsChoiceButton: { flex: 1, maxWidth: 160, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 999, borderWidth: 1, borderColor: '#303446', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050b11' },
  notificationsChoiceButtonActive: { backgroundColor: '#19e47022', borderColor: '#19e470' },
  notificationsChoiceText: { color: '#d6daff', fontSize: 15, fontWeight: '600' },
  notificationsChoiceTextActive: { color: '#ffffff' },
  notificationsContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notificationsTextBlock: { alignItems: 'center', marginBottom: 28, paddingHorizontal: 16 },
  notificationsTitle: { color: '#ffffff', fontSize: 26, fontWeight: '800', marginBottom: 8, textAlign: 'center' },
  notificationsSubtitle: { color: '#9ea4b8', fontSize: 14, lineHeight: 20, textAlign: 'center' },
  notificationsVideoPlaceholder: { width: 220, height: 220, borderRadius: 110, backgroundColor: '#050b11', borderWidth: 1, borderColor: '#262a3c' },
  notificationsFooter: { gap: 12, marginTop: 16 },
  notificationsToggleRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },

  /* ---------- WALLET DROPDOWN & SETTINGS ---------- */
  walletDropdown: { marginBottom: 16, marginTop: -4, backgroundColor: '#050b11', borderRadius: 16, borderWidth: 1, borderColor: '#202838', paddingVertical: 6 },
  walletDropdownItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, paddingVertical: 10 },
  walletDropdownItemActive: { backgroundColor: '#19e47014' },
  walletDropdownLabel: { color: '#d6daff', fontSize: 14, fontWeight: '600' },
  walletDropdownLabelActive: { color: '#ffffff' },
  walletDropdownBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999, backgroundColor: '#19e47022', color: '#19e470', fontSize: 11, fontWeight: '600' },
  walletDropdownAddRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#202838', marginTop: 4 },
  walletDropdownAddPlus: { color: '#19e470', fontSize: 18, marginRight: 6 },
  walletDropdownAddText: { color: '#d6daff', fontSize: 14, fontWeight: '600' },
  settingsDropdown: { marginBottom: 18, backgroundColor: '#050b11', borderRadius: 18, borderWidth: 1, borderColor: '#202838', paddingHorizontal: 14, paddingVertical: 10 },
  settingsSectionTitle: { color: '#7f86aa', fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, marginTop: 6, marginBottom: 4 },
  settingsItemRow: { paddingVertical: 10 },
  settingsItemLabel: { color: '#e4e7ff', fontSize: 14 },

  /* ---------- MAIN WALLET ROOT + SCROLL ---------- */
  walletRoot: { flex: 1, backgroundColor: '#020307' },
  walletScroll: { flex: 1, backgroundColor: '#020307' },
  walletScrollContent: { paddingHorizontal: 20, paddingTop: 52, paddingBottom: 100 },

  /* ---------- BOTTOM NAV BAR ---------- */
  bottomNavBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 18, paddingTop: 8, paddingBottom: 14, borderTopWidth: 1, borderTopColor: '#181f30', backgroundColor: '#020307' },
  bottomNavItemActive: {},
  bottomNavIndicator: { width: 22, height: 3, borderRadius: 999, backgroundColor: '#19e470', marginBottom: 4 },

  /* ---------- MNEMONIC FOOTER ---------- */
  mnemonicFooter: { paddingHorizontal: 20, gap: 12, marginTop: 'auto', paddingBottom: 32 },
  biometricsError: { marginTop: 12, textAlign: 'center', color: '#ff6b6b', fontSize: 13 },
  biometricsSuccess: { marginTop: 8, textAlign: 'center', color: '#19e470', fontSize: 13, fontWeight: '500' },

  /* ---------- ACTION ROW LIST (APPLE MUSIC STYLE) ---------- */
  actionList: { borderRadius: 18, backgroundColor: '#050b11', borderWidth: 1, borderColor: '#181f30', overflow: 'hidden' },
  actionRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#111622' },
  actionRowIconCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#111622', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  actionRowIconText: { color: '#19e470', fontSize: 16, fontWeight: '700' },
  actionRowText: { flex: 1 },
  actionRowLabel: { color: '#ffffff', fontSize: 15, fontWeight: '600' },
  actionRowSub: { color: '#8a90ad', fontSize: 12, marginTop: 2 },
  actionRowChevron: { color: '#565c78', marginLeft: 8 },

  /* ---------- TAB PLACEHOLDER SCREENS ---------- */
  tabPlaceholder: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  tabPlaceholderTitle: { color: '#ffffff', fontSize: 20, fontWeight: '700', marginBottom: 8 },
  tabPlaceholderSub: { color: '#9ea4b8', fontSize: 14, textAlign: 'center' },

  /* ---------- MAIN WALLET SHELL & SCROLL ---------- */
  mainWalletRoot: { flex: 1, backgroundColor: '#020712' },
  mainWalletScroll: { flex: 1 },
  pageScrollContent: { paddingTop: 32, paddingHorizontal: 16, paddingBottom: 32 },

  /* ---------- NEW PROFILE CARD (THE ONE YOU WANT) ---------- */
  profileCard: { backgroundColor: '#050c1a', borderRadius: 24, overflow: 'hidden', marginBottom: 24 },
  profileCover: { height: 72, backgroundColor: '#050c1a', justifyContent: 'center', paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#111827' },
  profileCoverHint: { color: '#6b7280', fontSize: 12 },
  profileRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 16 },
  profileAvatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#020712', borderWidth: 2, borderColor: '#22c55e', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  profileAvatarInitials: { color: 'white', fontWeight: '700', fontSize: 16 },
  profileTextBlock: { flex: 1 },
  profileName: { color: 'white', fontSize: 18, fontWeight: '700' },
  profileHandle: { color: '#9ca3af', fontSize: 13, marginTop: 2 },
  profileTagline: { color: '#6b7280', fontSize: 12, marginTop: 4 },
  mainSectionTitle: { color: 'white', fontSize: 17, fontWeight: '700', marginBottom: 8 },
  pageTitle: { color: 'white', fontSize: 20, fontWeight: '700', marginBottom: 16 },

  /* ---------- BOTTOM NAV BAR ---------- */
  bottomNav: { position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 18, paddingTop: 8, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#181f30', backgroundColor: '#020307' },
  bottomNavItem: { alignItems: 'center', justifyContent: 'center' },
  bottomNavIcon: { color: '#767c96', marginBottom: 2 },
  bottomNavIconActive: { color: '#19e470' },
  bottomNavLabel: { fontSize: 11, color: '#767c96' },
  bottomNavLabelActive: { color: '#19e470', fontWeight: '600' },

    // --- generic list rows used on several tabs ---
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#050811',
    marginBottom: 8,
  },
  listRowIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B1320',
    marginRight: 12,
  },
  listRowIconText: {
    color: '#46D369',
    fontWeight: '600',
    fontSize: 14,
  },
  listRowText: {
    flex: 1,
  },
  listRowTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  listRowSub: {
    color: '#8F9BB3',
    fontSize: 13,
    marginTop: 2,
  },
  listRowChevron: {
    color: '#3E475C',
  },
  cardList: {
    marginTop: 8,
    marginBottom: 24,
  },

  // --- screen titles / subtitles (Activity, Compute, Data) ---
  screenTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  screenSubtitle: {
    color: '#8F9BB3',
    fontSize: 13,
    marginBottom: 16,
  },

  // --- compute: timeframe chips & chart ---
  timeframeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  timeframeChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#273043',
  },
  timeframeChipSelected: {
    backgroundColor: '#0BD97D20',
    borderColor: '#0BD97D',
  },
  timeframeChipLabel: {
    color: '#8F9BB3',
    fontSize: 12,
    fontWeight: '500',
  },
  timeframeChipLabelSelected: {
    color: '#0BD97D',
  },

  computeChartCard: {
    borderRadius: 20,
    backgroundColor: '#050811',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  computeChartTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  computeChartSub: {
    color: '#8F9BB3',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  computeChartBody: {
    height: 180,
    flexDirection: 'row',
  },
  computeChartGrid: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 12,
    bottom: 28,
    justifyContent: 'space-between',
  },
  computeChartGridLine: {
    height: 1,
    backgroundColor: '#141A26',
  },
  computeChartBarsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 22,
  },
  computeChartBarGroup: {
    alignItems: 'center',
    width: 30,
  },
  computeChartBar: {
    width: 22,
    borderRadius: 8,
    backgroundColor: '#0BD97D',
    height: 80, // static placeholder
  },
  computeChartBarLabel: {
    marginTop: 6,
    fontSize: 11,
    color: '#8F9BB3',
  },
  computeChartEmptyText: {
    marginTop: 6,
    fontSize: 12,
    color: '#8F9BB3',
  },

  computeLegendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  computeLegendDotPrimary: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0BD97D',
    marginRight: 6,
  },
  computeLegendDotSecondary: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3B8BFF',
    marginLeft: 16,
    marginRight: 6,
  },
  computeLegendLabel: {
    fontSize: 11,
    color: '#8F9BB3',
  },
  // --- compute: instance card (AWS-style) ---
  instanceCard: {
    borderRadius: 20,
    backgroundColor: '#050811',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#181F30',
  },
  instanceHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  instanceNameBlock: {
    flex: 1,
    paddingRight: 8,
  },
  instanceName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  instanceSub: {
    color: '#8F9BB3',
    fontSize: 13,
    marginTop: 2,
  },
  instanceStatusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#07341E',
  },
  instanceStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0BD97D',
    marginRight: 6,
  },
  instanceStatusText: {
    color: '#0BD97D',
    fontSize: 12,
    fontWeight: '600',
  },
  instanceMetaList: {
    marginTop: 4,
    marginBottom: 10,
  },
  instanceMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  instanceMetaLabel: {
    color: '#8F9BB3',
    fontSize: 12,
  },
  instanceMetaValue: {
    color: '#E5E7FF',
    fontSize: 12,
    fontWeight: '500',
  },
  instanceActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  instanceActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#273043',
  },
  instanceActionIcon: {
    color: '#8F9BB3',
    marginRight: 4,
  },
  instanceActionText: {
    color: '#E5E7FF',
    fontSize: 12,
    fontWeight: '500',
  },

  // --- compute: metric view toggle (Hashrate vs Utilization) ---
  metricsToggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  metricsToggleChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#273043',
  },
  metricsToggleChipActive: {
    backgroundColor: '#0BD97D20',
    borderColor: '#0BD97D',
  },
  metricsToggleLabel: {
    color: '#8F9BB3',
    fontSize: 12,
    fontWeight: '500',
  },
  metricsToggleLabelActive: {
    color: '#0BD97D',
  },

});