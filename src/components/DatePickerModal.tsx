import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

const DatePickerModal = ({
  visible,
  onClose,
  onDateSelect,
  selectedDate,
}: {
  visible: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  selectedDate?: string;
}) => {
  const { colors, colorScheme } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

  const initialDate = selectedDate
    ? new Date(selectedDate)
    : new Date(2019, 1, 10);
  const [selectedDay, setSelectedDay] = useState(initialDate.getDate());

  const monthNames = useMemo(
    () => [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    [],
  );

  const dayNames = useMemo(
    () => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    [],
  );

  const getDaysInMonth = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, []);

  const handlePreviousMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  }, [currentDate]);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  }, [currentDate]);

  const handleDayPress = useCallback(
    (day: number) => {
      setSelectedDay(day);
      const selectedDateString = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1,
      ).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      onDateSelect(selectedDateString);
      onClose();
    },
    [currentDate, onDateSelect, onClose],
  );

  const days = useMemo(
    () => getDaysInMonth(currentDate),
    [currentDate, getDaysInMonth],
  );

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
            { backgroundColor: colors.headerBackgroundColor },
          ]}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: colors.textColorMain }]}>
              Select Date
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

          <View style={styles.lineSeparator} />
          <View style={styles.monthContainer}>
            <Text style={[styles.monthText, { color: colors.textColorMain }]}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </Text>
            <View style={styles.monthNavigationContainer}>
              <TouchableOpacity
                onPress={handlePreviousMonth}
                style={styles.navButton}
              >
                <ChevronLeftIcon
                  color={colorScheme === 'light' ? 'black' : colors.secondary}
                  size={20}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNextMonth}
                style={styles.navButton}
              >
                <ChevronRightIcon
                  color={colorScheme === 'light' ? 'black' : colors.secondary}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.daysOfWeekContainer}>
            {dayNames.map(day => (
              <Text
                key={day}
                style={[styles.dayOfWeekText, { color: colors.grayTextColors }]}
              >
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {days.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  day === selectedDay && styles.selectedDayButton,
                  day === selectedDay && { backgroundColor: colors.secondary },
                ]}
                onPress={() => day && handleDayPress(day)}
                disabled={!day}
              >
                <Text
                  style={[
                    styles.dayText,
                    { color: colors.textColorMain },
                    day === selectedDay && styles.selectedDayText,
                    !day && styles.emptyDayText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: width * 0.9,
    maxWidth: 400,
    borderRadius: 12,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  lineSeparator: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(204, 212, 221, 0.12)',
    marginVertical: 20,
  },

  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  monthText: {
    fontSize: 18,
    fontFamily: 'Silka Medium',
  },
  monthNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayOfWeekText: {
    fontSize: 14,
    fontFamily: 'Silka SemiBold',
    width: 50,
    textAlign: 'left',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayButton: {
    width: 44,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    borderRadius: 20,
  },
  selectedDayButton: {
    borderRadius: 20,
  },
  dayText: {
    fontSize: 17,
    fontFamily: 'Silka Normal',
  },
  selectedDayText: {
    color: '#fff',
  },
  emptyDayText: {
    color: 'transparent',
  },
});

export default DatePickerModal;
