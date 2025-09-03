

//     export function logMethodCall(prefix: string) {

//         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value; // Store the original method

//         descriptor.value = function (...args: any[]) {
//            const start = performance.now();

//           console.log(`${prefix} - Calling method: ${String(propertyKey)} with arguments:`, args);
//           const result = originalMethod.apply(this, args); // Call the original method
//           console.log(`${prefix} - Method ${String(propertyKey)} returned:`, result);
//            const end = performance.now();
//           console.log(`${prefix} - Method ${String(propertyKey)} execution time: ${end - start} milliseconds`);
//           return result;
//         };

//         return descriptor; // Return the modified descriptor
//       };
//     }

   
//     export function Info(target: Function) {
//     console.log(`Class name: ${target.name} has been decorated`);
//     };

// export function DefaultValue(value: string) {
//  return function(target: any, propertyName: string) {
//   console.log('default value decorator called for',propertyName);
//     Object.defineProperty(target, propertyName, {
//       get: () => value,
//       set: v => (value = v),
//     });
//  };
// }


// export function LogClass(constructor: Function) {
//   console.log('Class created:', constructor.name);
// }



