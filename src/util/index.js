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

export const filterActivities = (activities, categories) => {
  const preferringActivityType = localStorage.getItem(
    "preferfing-activity-type"
  );
  const dislikingActivityType = localStorage.getItem("dislike-activity-type");
  const stress = localStorage.getItem("stress");

  const results = extractActivitiesByCategories(activities, categories);
  const preferringActivities = [];
  const dislikingActivities = [];

  results.filter((result) => {
    if (result.tags.includes(preferringActivityType)) {
      preferringActivities.push(result);
      return true;
    }

    if (results.tags.includes(dislikingActivityType)) {
      dislikingActivities.push(results);
      return true;
    }

    return false;
  });

  return [...preferringActivities, results, ...dislikingActivities].map(
    (item) => item.high_threshold <= stress <= item.low_threshold
  );
};
