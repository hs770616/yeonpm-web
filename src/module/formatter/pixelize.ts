/**
 * px단위가 붙지 않은 number 또는 string 값을 px단위가 붙은 string 값으로 반환해주는 함수
 * @param value px이 붙거나 붙지 않은 number 또는 string
 * @returns px이 붙은 string
 */
export function pixelize(value: string | number) {
  try {
    return typeof value === "number"
      ? `${value}px`
      : value === "auto"
      ? value
      : typeof value === "string"
      ? value
      : `${value}px`;
  } catch (e) {
    console.error("pixelize error", e);
    return "";
  }
}
