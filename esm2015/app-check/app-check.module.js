import { NgModule, Optional, NgZone, InjectionToken, PLATFORM_ID, isDevMode, Injector } from '@angular/core';
import { ɵgetDefaultInstanceOf, ɵAngularFireSchedulers, VERSION } from '@angular/fire';
import { AppCheck, AppCheckInstances, APP_CHECK_PROVIDER_NAME } from './app-check';
import { FirebaseApps, FirebaseApp } from '@angular/fire/app';
import { registerVersion } from 'firebase/app';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
export const PROVIDED_APP_CHECK_INSTANCES = new InjectionToken('angularfire2.app-check-instances');
export const APP_CHECK_NAMESPACE_SYMBOL = Symbol('angularfire2.app-check.namespace');
export function defaultAppCheckInstanceFactory(provided, defaultApp) {
    const defaultAppCheck = ɵgetDefaultInstanceOf(APP_CHECK_PROVIDER_NAME, provided, defaultApp);
    return defaultAppCheck && new AppCheck(defaultAppCheck);
}
const LOCALHOSTS = ['localhost', '0.0.0.0', '127.0.0.1'];
const isLocalhost = typeof window !== 'undefined' && LOCALHOSTS.includes(window.location.hostname);
export function appCheckInstanceFactory(fn) {
    // tslint:disable-next-line:ban-types
    return (zone, injector, platformId) => {
        var _a;
        // Node should use admin token provider, browser devmode and localhost should use debug token
        if (!isPlatformServer(platformId) && (isDevMode() || isLocalhost)) {
            (_a = globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN) !== null && _a !== void 0 ? _a : (globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true);
        }
        const appCheck = zone.runOutsideAngular(() => fn(injector));
        return new AppCheck(appCheck);
    };
}
const APP_CHECK_INSTANCES_PROVIDER = {
    provide: AppCheckInstances,
    deps: [
        [new Optional(), PROVIDED_APP_CHECK_INSTANCES],
    ]
};
const DEFAULT_APP_CHECK_INSTANCE_PROVIDER = {
    provide: AppCheck,
    useFactory: defaultAppCheckInstanceFactory,
    deps: [
        [new Optional(), PROVIDED_APP_CHECK_INSTANCES],
        FirebaseApp,
        PLATFORM_ID,
    ]
};
export class AppCheckModule {
    constructor() {
        registerVersion('angularfire', VERSION.full, 'app-check');
    }
}
AppCheckModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppCheckModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AppCheckModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppCheckModule });
AppCheckModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppCheckModule, providers: [
        DEFAULT_APP_CHECK_INSTANCE_PROVIDER,
        APP_CHECK_INSTANCES_PROVIDER,
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppCheckModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        DEFAULT_APP_CHECK_INSTANCE_PROVIDER,
                        APP_CHECK_INSTANCES_PROVIDER,
                    ]
                }]
        }], ctorParameters: function () { return []; } });
export function provideAppCheck(fn, ...deps) {
    return {
        ngModule: AppCheckModule,
        providers: [{
                provide: PROVIDED_APP_CHECK_INSTANCES,
                useFactory: appCheckInstanceFactory(fn),
                multi: true,
                deps: [
                    NgZone,
                    Injector,
                    PLATFORM_ID,
                    ɵAngularFireSchedulers,
                    FirebaseApps,
                    ...deps,
                ]
            }]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNoZWNrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAtY2hlY2svYXBwLWNoZWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUF1QixXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVuRCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLGNBQWMsQ0FBYSxrQ0FBa0MsQ0FBQyxDQUFDO0FBQy9HLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXJGLE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxRQUFzQyxFQUFFLFVBQXVCO0lBQzVHLE1BQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFtQix1QkFBdUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0csT0FBTyxlQUFlLElBQUksSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRW5HLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxFQUE0QztJQUNsRixxQ0FBcUM7SUFDckMsT0FBTyxDQUFDLElBQVksRUFBRSxRQUFrQixFQUFFLFVBQWtCLEVBQUUsRUFBRTs7UUFDOUQsNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFO1lBQ2pFLE1BQUEsVUFBVSxDQUFDLDZCQUE2QixvQ0FBeEMsVUFBVSxDQUFDLDZCQUE2QixHQUFLLElBQUksRUFBQztTQUNuRDtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLDRCQUE0QixHQUFHO0lBQ25DLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsSUFBSSxFQUFFO1FBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLDRCQUE0QixDQUFFO0tBQ2hEO0NBQ0YsQ0FBQztBQUVGLE1BQU0sbUNBQW1DLEdBQUc7SUFDMUMsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLDhCQUE4QjtJQUMxQyxJQUFJLEVBQUU7UUFDSixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsNEJBQTRCLENBQUU7UUFDL0MsV0FBVztRQUNYLFdBQVc7S0FDWjtDQUNGLENBQUM7QUFRRixNQUFNLE9BQU8sY0FBYztJQUN6QjtRQUNFLGVBQWUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzsyR0FIVSxjQUFjOzRHQUFkLGNBQWM7NEdBQWQsY0FBYyxhQUxkO1FBQ1QsbUNBQW1DO1FBQ25DLDRCQUE0QjtLQUM3QjsyRkFFVSxjQUFjO2tCQU4xQixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVCxtQ0FBbUM7d0JBQ25DLDRCQUE0QjtxQkFDN0I7aUJBQ0Y7O0FBT0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxFQUE0QyxFQUFFLEdBQUcsSUFBVztJQUMxRixPQUFPO1FBQ0wsUUFBUSxFQUFFLGNBQWM7UUFDeEIsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsVUFBVSxFQUFFLHVCQUF1QixDQUFDLEVBQUUsQ0FBQztnQkFDdkMsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLE1BQU07b0JBQ04sUUFBUTtvQkFDUixXQUFXO29CQUNYLHNCQUFzQjtvQkFDdEIsWUFBWTtvQkFDWixHQUFHLElBQUk7aUJBQ1I7YUFDRixDQUFDO0tBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIE5nWm9uZSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIFBMQVRGT1JNX0lELCBpc0Rldk1vZGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBDaGVjayBhcyBGaXJlYmFzZUFwcENoZWNrIH0gZnJvbSAnZmlyZWJhc2UvYXBwLWNoZWNrJztcbmltcG9ydCB7IMm1Z2V0RGVmYXVsdEluc3RhbmNlT2YsIMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzLCBWRVJTSU9OIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBBcHBDaGVjaywgQXBwQ2hlY2tJbnN0YW5jZXMsIEFQUF9DSEVDS19QUk9WSURFUl9OQU1FIH0gZnJvbSAnLi9hcHAtY2hlY2snO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBzLCBGaXJlYmFzZUFwcCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXBwJztcbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFBST1ZJREVEX0FQUF9DSEVDS19JTlNUQU5DRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48QXBwQ2hlY2tbXT4oJ2FuZ3VsYXJmaXJlMi5hcHAtY2hlY2staW5zdGFuY2VzJyk7XG5leHBvcnQgY29uc3QgQVBQX0NIRUNLX05BTUVTUEFDRV9TWU1CT0wgPSBTeW1ib2woJ2FuZ3VsYXJmaXJlMi5hcHAtY2hlY2submFtZXNwYWNlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0QXBwQ2hlY2tJbnN0YW5jZUZhY3RvcnkocHJvdmlkZWQ6IEZpcmViYXNlQXBwQ2hlY2tbXXx1bmRlZmluZWQsIGRlZmF1bHRBcHA6IEZpcmViYXNlQXBwKSB7XG4gIGNvbnN0IGRlZmF1bHRBcHBDaGVjayA9IMm1Z2V0RGVmYXVsdEluc3RhbmNlT2Y8RmlyZWJhc2VBcHBDaGVjaz4oQVBQX0NIRUNLX1BST1ZJREVSX05BTUUsIHByb3ZpZGVkLCBkZWZhdWx0QXBwKTtcbiAgcmV0dXJuIGRlZmF1bHRBcHBDaGVjayAmJiBuZXcgQXBwQ2hlY2soZGVmYXVsdEFwcENoZWNrKTtcbn1cblxuY29uc3QgTE9DQUxIT1NUUyA9IFsnbG9jYWxob3N0JywgJzAuMC4wLjAnLCAnMTI3LjAuMC4xJ107XG5jb25zdCBpc0xvY2FsaG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIExPQ0FMSE9TVFMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcENoZWNrSW5zdGFuY2VGYWN0b3J5KGZuOiAoaW5qZWN0b3I6IEluamVjdG9yKSA9PiBGaXJlYmFzZUFwcENoZWNrKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHlwZXNcbiAgcmV0dXJuICh6b25lOiBOZ1pvbmUsIGluamVjdG9yOiBJbmplY3RvciwgcGxhdGZvcm1JZDogT2JqZWN0KSA9PiB7XG4gICAgLy8gTm9kZSBzaG91bGQgdXNlIGFkbWluIHRva2VuIHByb3ZpZGVyLCBicm93c2VyIGRldm1vZGUgYW5kIGxvY2FsaG9zdCBzaG91bGQgdXNlIGRlYnVnIHRva2VuXG4gICAgaWYgKCFpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpICYmIChpc0Rldk1vZGUoKSB8fCBpc0xvY2FsaG9zdCkpIHtcbiAgICAgIGdsb2JhbFRoaXMuRklSRUJBU0VfQVBQQ0hFQ0tfREVCVUdfVE9LRU4gPz89IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGFwcENoZWNrID0gem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBmbihpbmplY3RvcikpO1xuICAgIHJldHVybiBuZXcgQXBwQ2hlY2soYXBwQ2hlY2spO1xuICB9O1xufVxuXG5jb25zdCBBUFBfQ0hFQ0tfSU5TVEFOQ0VTX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBBcHBDaGVja0luc3RhbmNlcyxcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgUFJPVklERURfQVBQX0NIRUNLX0lOU1RBTkNFUyBdLFxuICBdXG59O1xuXG5jb25zdCBERUZBVUxUX0FQUF9DSEVDS19JTlNUQU5DRV9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogQXBwQ2hlY2ssXG4gIHVzZUZhY3Rvcnk6IGRlZmF1bHRBcHBDaGVja0luc3RhbmNlRmFjdG9yeSxcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgUFJPVklERURfQVBQX0NIRUNLX0lOU1RBTkNFUyBdLFxuICAgIEZpcmViYXNlQXBwLFxuICAgIFBMQVRGT1JNX0lELFxuICBdXG59O1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBERUZBVUxUX0FQUF9DSEVDS19JTlNUQU5DRV9QUk9WSURFUixcbiAgICBBUFBfQ0hFQ0tfSU5TVEFOQ0VTX1BST1ZJREVSLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENoZWNrTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgcmVnaXN0ZXJWZXJzaW9uKCdhbmd1bGFyZmlyZScsIFZFUlNJT04uZnVsbCwgJ2FwcC1jaGVjaycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXBwQ2hlY2soZm46IChpbmplY3RvcjogSW5qZWN0b3IpID0+IEZpcmViYXNlQXBwQ2hlY2ssIC4uLmRlcHM6IGFueVtdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBcHBDaGVja01vZHVsZT4ge1xuICByZXR1cm4ge1xuICAgIG5nTW9kdWxlOiBBcHBDaGVja01vZHVsZSxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICBwcm92aWRlOiBQUk9WSURFRF9BUFBfQ0hFQ0tfSU5TVEFOQ0VTLFxuICAgICAgdXNlRmFjdG9yeTogYXBwQ2hlY2tJbnN0YW5jZUZhY3RvcnkoZm4pLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbXG4gICAgICAgIE5nWm9uZSxcbiAgICAgICAgSW5qZWN0b3IsXG4gICAgICAgIFBMQVRGT1JNX0lELFxuICAgICAgICDJtUFuZ3VsYXJGaXJlU2NoZWR1bGVycyxcbiAgICAgICAgRmlyZWJhc2VBcHBzLFxuICAgICAgICAuLi5kZXBzLFxuICAgICAgXVxuICAgIH1dXG4gIH07XG59XG4iXX0=