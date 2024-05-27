export const extractActivitiesByCategory = (activities, category) => {
  return activities.filter((activity) => activity.category.includes(category));
};

export const extractActivitiesByCategories = (activities, categories) => {
  const result = [];

  categories.forEach((category) => {
    const extractedActivities = extractActivitiesByCategory(
      activities,
      category
    );

    if (extractedActivities.length > 0) {
      result.push(...extractActivitiesByCategory(activities, category));
    }
  });

  return result;
};
