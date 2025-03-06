/**
 * Creates a parametrized route function.
 *
 * @param route - The base route string with placeholders for parameters.
 * @param params - An array of parameter names.
 * @returns A function that accepts an object containing parameter values and returns the formatted route string.
 */
export const createParametrizedRoute = <T extends string>(
    route: string,
    params: T[],
  ) => {
    const fn = (
      routeParams: Readonly<{
        [K in T]: string;
      }>,
    ) => {
      let path = route;
      params.forEach((param) => {
        path = path.replace(`[${param}]`, routeParams[param]);
      });
      return path;
    };
    return fn;
  };
  
  