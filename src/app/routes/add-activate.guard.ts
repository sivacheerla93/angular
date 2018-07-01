import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AddActivateGuard implements CanActivate {
    canActivate(): boolean {
        var pwd = prompt("Enter your password");
        if (pwd == "siva")
            return true;
        else
            return false;
    }
}
