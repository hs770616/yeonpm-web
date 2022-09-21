export const isLocal = process.env.NEXT_PUBLIC_BASE_PATH?.startsWith('local');
export const isProduction = process.env.NEXT_PUBLIC_BASE_PATH?.startsWith('yeonpm');
