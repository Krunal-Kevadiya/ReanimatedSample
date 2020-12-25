const navigateBack = (navigation: object, isPop = false): void => {
  if (isPop) {
    navigatePop(navigation, isPop);
  } else {
    navigation.goBack();
  }
};

const navigatePop = (navigation: object, isPop = false): void => {
  if (isPop) {
    navigation.pop();
  } else {
    navigation.popToTop();
  }
};

const navigateWithReplace = (navigation: object, routeName: string, params: object): void => {
  navigation.replace(routeName, params);
};

const navigateWithParam = (navigation: object, routeName: string, params: object = {}, isPopTop = false): void => {
  isPopTop && navigation.popToTop();
  navigation.navigate(routeName, params);
};

const navigateWithPush = (navigation: object, routeName: string, params: object = {}, isPopTop = false): void => {
  isPopTop && navigatePop(navigation);
  navigation.push(routeName, params);
};

const navigateWithReset = (navigation: object, stackName: string, routeName: string, params: object = {}): void => {
  navigation.reset({
    index: 0,
    routes: [
      {
        name: stackName,
        state: { routes: [{ name: routeName, params }] }
      }
    ]
  });
};

export { navigateBack, navigatePop, navigateWithReplace, navigateWithParam, navigateWithPush, navigateWithReset };
