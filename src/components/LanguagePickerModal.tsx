import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const LanguagePickerModal = ({
  visible,
  onClose,
  onLanguageSelect,
  selectedLanguage,
}: {
  visible: boolean;
  onClose: () => void;
  onLanguageSelect: (language: string) => void;
  selectedLanguage?: string;
}) => {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState('');

  const languages = useMemo(
    () => [
      'Any',
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C#',
      'C++',
      'C',
      'Go',
      'Rust',
      'PHP',
      'Swift',
      'Kotlin',
      'Ruby',
      'Dart',
      'R',
      'SQL',
      'HTML',
      'CSS',
      'Shell',
      'PowerShell',
      'Objective-C',
      'Scala',
      'Perl',
      'Lua',
      'Haskell',
      'Elixir',
      'Erlang',
      'Clojure',
      'F#',
      'MATLAB',
      'Julia',
      'Assembly',
      'Visual Basic .NET',
      'Groovy',
      'VBA',
      'Fortran',
      'COBOL',
      'Solidity',
      'SAS',
      'GraphQL',
      'WebAssembly',
      'QML',
      'Nim',
      'Crystal',
      'Zig',
      'V',
      'Carbon',
      'Mojo',
      'Svelte',
      'Vue',
      'TSX',
      'JSX',
      'Markdown',
      'JSON',
      'YAML',
      'XML',
      'Dockerfile',
      'Makefile',
      'CMake',
      'TeX',
      'Jupyter Notebook',
      'ShaderLab',
      'Verilog',
      'VHDL',
      'Prolog',
      'Lisp',
      'Scheme',
      'OCaml',
      'Pascal',
      'Delphi',
      'Batchfile',
      'Bash',
      'Nix',
      'Tcl',
      'Ada',
      'PLSQL',
      'Hack',
      'Sass',
      'Less',
      'Stylus',
      'HLSL',
      'GLSL',
      'SQLPL',
      'Starlark',
    ],
    [],
  );

  const filteredLanguages = useMemo(() => {
    if (!searchText.trim()) {
      return languages;
    }
    const searchLower = searchText.toLowerCase().trim();
    return languages.filter(language =>
      language.toLowerCase().includes(searchLower),
    );
  }, [searchText, languages]);

  const handleLanguagePress = useCallback(
    (language: string) => {
      onLanguageSelect(language);
      onClose();
    },
    [onLanguageSelect, onClose],
  );

  const renderLanguageItem = ({ item }: { item: string }) => {
    const isSelected = item === selectedLanguage;
    return (
      <TouchableOpacity
        style={[styles.languageItem]}
        onPress={() => handleLanguagePress(item)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.languageText,
            { color: colors.textColorMain },
            isSelected && [
              styles.selectedLanguageText,
              { color: colors.secondary },
            ],
          ]}
        >
          {item}
        </Text>
        {isSelected && (
          <Text style={[styles.checkmark, { color: colors.primary }]}>✓</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        onPress={onClose}
        style={styles.modalOverlay}
        activeOpacity={1}
      >
        <TouchableOpacity
          style={[
            styles.modalContainer,
            { backgroundColor: colors.backgroundColor },
          ]}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: colors.textColorMain }]}>
              Select Language
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.closeButton,
                { backgroundColor: colors.grayTextColors },
              ]}
            >
              <Text
                style={[
                  styles.closeButtonText,
                  { color: colors.headerBackgroundColor },
                ]}
              >
                ✕
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={[
                styles.searchInput,
                {
                  color: colors.textColorMain,
                  borderColor: colors.grayTextColors + '40',
                  backgroundColor: colors.backgroundColor,
                },
              ]}
              placeholder="Search languages..."
              placeholderTextColor={colors.grayTextColors}
              value={searchText}
              onChangeText={setSearchText}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.searchIcon}
              onPress={() => setSearchText(searchText)}
            >
              <MagnifyingGlassIcon size={20} color={colors.grayTextColors} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredLanguages}
            renderItem={renderLanguageItem}
            keyExtractor={item => item}
            style={[
              styles.languageList,
              { borderColor: colors.headerBackgroundColor },
            ]}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.listContentContainer}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Silka Medium',
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 12,
    fontFamily: 'Silka SemiBold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingRight: 40,
    fontSize: 16,
    fontFamily: 'Silka Normal',
  },
  searchIcon: {
    position: 'absolute',
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconText: {
    fontSize: 16,
  },
  languageList: {
    minHeight: 200,
    borderWidth: 1,
    width: '100%',
  },
  listContentContainer: {
    flexGrow: 1,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 34,
    minHeight: 48,
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Silka Normal',
    flex: 1,
  },
  selectedLanguageText: {
    fontFamily: 'Silka SemiBold',
  },
  checkmark: {
    fontSize: 18,
    fontFamily: 'Silka SemiBold',
    marginLeft: 8,
  },
  divider: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(204, 212, 221, 0.12)',
  },
});

export default LanguagePickerModal;
