import { ɵgetAllInstancesOf } from '@angular/fire';
import { from, timer } from 'rxjs';
import { concatMap, distinct } from 'rxjs/operators';
export const AUTH_PROVIDER_NAME = 'auth';
export class Auth {
    constructor(auth) {
        return auth;
    }
}
export class AuthInstances {
    constructor() {
        return ɵgetAllInstancesOf(AUTH_PROVIDER_NAME);
    }
}
export const authInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(AUTH_PROVIDER_NAME))), distinct());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0FBTXpDLE1BQU0sT0FBTyxJQUFJO0lBQ2YsWUFBWSxJQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUtELE1BQU0sT0FBTyxhQUFhO0lBQ3hCO1FBQ0UsT0FBTyxrQkFBa0IsQ0FBZSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDN0MsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBZSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFDM0UsUUFBUSxFQUFFLENBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGggYXMgRmlyZWJhc2VBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyDJtWdldEFsbEluc3RhbmNlc09mIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBmcm9tLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBkaXN0aW5jdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfUFJPVklERVJfTkFNRSA9ICdhdXRoJztcblxuLy8gc2VlIG5vdGVzIGluIGNvcmUvZmlyZWJhc2UuYXBwLm1vZHVsZS50cyBmb3Igd2h5IHdlJ3JlIGJ1aWxkaW5nIHRoZSBjbGFzcyBsaWtlIHRoaXNcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aCBleHRlbmRzIEZpcmViYXNlQXV0aCB7fVxuXG5leHBvcnQgY2xhc3MgQXV0aCB7XG4gIGNvbnN0cnVjdG9yKGF1dGg6IEZpcmViYXNlQXV0aCkge1xuICAgIHJldHVybiBhdXRoO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEluc3RhbmNlcyBleHRlbmRzIEFycmF5PEZpcmViYXNlQXV0aD4ge31cblxuZXhwb3J0IGNsYXNzIEF1dGhJbnN0YW5jZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gybVnZXRBbGxJbnN0YW5jZXNPZjxGaXJlYmFzZUF1dGg+KEFVVEhfUFJPVklERVJfTkFNRSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhJbnN0YW5jZSQgPSB0aW1lcigwLCAzMDApLnBpcGUoXG4gIGNvbmNhdE1hcCgoKSA9PiBmcm9tKMm1Z2V0QWxsSW5zdGFuY2VzT2Y8RmlyZWJhc2VBdXRoPihBVVRIX1BST1ZJREVSX05BTUUpKSksXG4gIGRpc3RpbmN0KCksXG4pO1xuIl19