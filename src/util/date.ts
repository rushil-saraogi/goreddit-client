export function cardDateFormat(timestamp: number): { dateString: string, isToday: boolean, isYesterday: boolean } {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const postDate = new Date(timestamp * 1000);

    const timeString = Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use 24-hour format
  }).format(postDate);

    if (today.getDate() === postDate.getDate()) {
        return {
          dateString: 'Today, ' + timeString,
          isToday: true,
          isYesterday: false,
        }
    }

    if (yesterday.getDate() === postDate.getDate()) {
        return {
          dateString: 'Yesterday, ' + timeString,
          isToday: false,
          isYesterday: true,
        }
    }

    return {
      dateString: postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ', ' + timeString,
      isToday: false,
      isYesterday: false,
    }
}