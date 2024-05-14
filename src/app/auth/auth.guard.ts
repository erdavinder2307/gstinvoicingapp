import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<DashboardComponent>, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        return this.checkAuth();
    }

    canActivateChild(): boolean {
        return this.checkAuth();
    }

    canDeactivate(component: DashboardComponent): boolean {
        // if (component.hasUnsavedChanges()) {
        //   return window.confirm('You have unsaved changes. Do you really want to leave?');
        // }
        return true;
    }

    canLoad(): boolean {
        return this.checkAuth();
    }

    private checkAuth(): boolean {
        if (this.authService.isAuthenticatedUser()) {
            return true;
        } else {
            // Redirect to the login page if the user is not authenticated
            this.router.navigate(['/login']);
            return false;
        }
    }

}