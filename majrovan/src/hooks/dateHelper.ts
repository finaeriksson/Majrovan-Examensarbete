// utils/dateHelpers.ts
export function formatArchiveLabel(ym: string): string {
  // ym kommer in som "2025-02"
  const [year, month] = ym.split('-').map(Number);          // [2025, 2]
  const date = new Date(year, month - 1);                   // JS-månader är 0-indexerade
  const label = date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
  });                                                       // "2025 februari"

  // Gör första bokstaven versal (“Februari” istället för “februari”)
  return label.charAt(0).toUpperCase() + label.slice(1);
}
