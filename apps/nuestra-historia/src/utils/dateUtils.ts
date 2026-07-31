export function calculateDaysTogether(startDateStr: string): number {
  const startDate = new Date(startDateStr);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('es-ES', options);
}

export function calculateMonths(startDateStr: string): number {
  const start = new Date(startDateStr);
  const today = new Date();
  const months = (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth());
  return months;
}
