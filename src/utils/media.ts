import type { ActivityItem } from '../data/activities';

export function formatActivityDate(date: string | Date, dateLabel?: string): string {
  if (dateLabel) {
    return dateLabel;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function slugifyCategory(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getPublishedActivities(activities: ActivityItem[]): ActivityItem[] {
  return activities.filter((activity) => !activity.draft);
}

export function sortActivitiesByDate(activities: ActivityItem[]): ActivityItem[] {
  return [...activities].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedActivity(activities: ActivityItem[]): ActivityItem | undefined {
  const published = sortActivitiesByDate(getPublishedActivities(activities));
  return published.find((activity) => activity.featured) ?? published[0];
}

export function getActivityBySlug(
  activities: ActivityItem[],
  slug: string,
): ActivityItem | undefined {
  return getPublishedActivities(activities).find((activity) => activity.slug === slug);
}

export function getRelatedActivities(
  activities: ActivityItem[],
  currentSlug: string,
  category: string,
  limit = 3,
): ActivityItem[] {
  const publishedActivities = sortActivitiesByDate(getPublishedActivities(activities)).filter(
    (activity) => activity.slug !== currentSlug,
  );
  const sameCategory = publishedActivities.filter((activity) => activity.category === category);
  const fallback = publishedActivities.filter((activity) => activity.category !== category);

  return [...sameCategory, ...fallback].slice(0, limit);
}
