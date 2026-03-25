import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Centralized color palette shared with Tailwind
const colors = require('../../theme/colors.json');

interface SettingsScreenProps {
  onBack: () => void;
}

interface SettingsRow {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  iconBg: string;
  iconColor: string;
}

interface SettingsSection {
  title: string;
  rows: SettingsRow[];
}

const SECTIONS: SettingsSection[] = [
  {
    title: 'Account',
    rows: [
      { icon: 'person-outline', label: 'Profile', iconBg: colors.primarySoft, iconColor: colors.primary },
      { icon: 'card-outline', label: 'Wallet', iconBg: colors.primarySoft, iconColor: colors.primary },
      { icon: 'shield-checkmark-outline', label: 'Security', iconBg: colors.primarySoft, iconColor: colors.primary },
    ],
  },
  {
    title: 'Notifications',
    rows: [
      { icon: 'notifications-outline', label: 'Push Notifications', iconBg: colors.amberSoft, iconColor: colors.amber },
      { icon: 'mail-outline', label: 'Email Alerts', iconBg: colors.amberSoft, iconColor: colors.amber },
    ],
  },
  {
    title: 'Privacy',
    rows: [
      { icon: 'lock-closed-outline', label: 'Data & Privacy', iconBg: colors.purpleSoft, iconColor: colors.purple },
      { icon: 'eye-off-outline', label: 'Block List', iconBg: colors.purpleSoft, iconColor: colors.purple },
    ],
  },
  {
    title: 'About',
    rows: [
      { icon: 'information-circle-outline', label: 'Version', iconBg: colors.infoSoft, iconColor: colors.info },
      { icon: 'document-text-outline', label: 'Terms & Conditions', iconBg: colors.infoSoft, iconColor: colors.info },
      { icon: 'help-circle-outline', label: 'Help & Support', iconBg: colors.infoSoft, iconColor: colors.info },
      { icon: 'log-out-outline', label: 'Log Out', iconBg: colors.errorSoft, iconColor: colors.error },
    ],
  },
];

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Top bar */}
      <View className="flex-row items-center justify-between bg-white px-4 py-4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onBack}
          className="h-10 w-10 items-center justify-center rounded-full"
          accessibilityLabel="Go back"
          accessibilityRole="button"
        >
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Text className="text-lg font-semibold text-text">Settings</Text>

        {/* Right spacer for visual balance */}
        <View className="h-10 w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {SECTIONS.map((section) => (
          <View key={section.title} className="mt-6 px-6">
            {/* Section header */}
            <Text className="mb-2 text-xs font-semibold uppercase tracking-widest text-textMuted">
              {section.title}
            </Text>

            {/* Section card */}
            <View className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {section.rows.map((row, index) => (
                <View key={row.label}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="flex-row items-center px-4 py-4"
                    accessibilityLabel={row.label}
                    accessibilityRole="button"
                  >
                    {/* Icon */}
                    <View
                      className="mr-4 h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: row.iconBg }}
                    >
                      <Ionicons name={row.icon} size={20} color={row.iconColor} />
                    </View>

                    {/* Label */}
                    <Text className="flex-1 text-base font-medium text-text">{row.label}</Text>

                    {/* Chevron */}
                    <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
                  </TouchableOpacity>

                  {/* Divider (not after last row) */}
                  {index < section.rows.length - 1 && (
                    <View className="ml-[72px] h-px bg-borderSubtle" />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
