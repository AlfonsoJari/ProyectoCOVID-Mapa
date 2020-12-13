import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/userapi";

describe('DataApiService', () => {

    

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HttpClientModule]

    }));



    xit('should return an Logged User', () => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);

        var mydata = new UserApi;
        mydata.username = "mayahaj";
        mydata.password = "123456789";        

        // Act
        service.loginUser(mydata).subscribe((user: any) => {

            console.log(user.tokenType);
            console.log(user.accessToken);
            expect(user.tokenType).toEqual('Bearer');
            
        });
        

    });

}); 