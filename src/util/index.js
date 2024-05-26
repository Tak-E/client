export const extractActivitiesByCategory = (activities, category) => {
  return activities.filter((activity) => activity.category.includes(category));
};
