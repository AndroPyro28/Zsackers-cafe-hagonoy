import { ForbiddenException, Injectable } from '@nestjs/common';
import { ArgonHelper } from 'src/common/helpers/argon.helper';
import { sendEmailModel, SMTP } from 'src/common/utils';
import { User } from 'src/models';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  /**
   *
   */
  constructor(
    private readonly userModel: User,
    private readonly argonHelper: ArgonHelper,
    private readonly Smtp: SMTP,
  ) {}

  async create(createStaffDto: CreateStaffDto) {
    const password = 'test123';
    const hashPw = await this.argonHelper.hash(password);

    const newUser = await this.userModel.createUser({
      ...createStaffDto,
      password: hashPw,
      confirmPassword: hashPw,
    });

    if (!newUser) throw new ForbiddenException('email is already exist');

    const smtp: sendEmailModel = {
      subject: `Employee Created!`,
      content: `<div> 
          <h3> hello ${createStaffDto.firstname} ${createStaffDto.lastname} </h3>

          <p> We are informing you that you are hired in Zsackers cafe. </p>

          <h4>These are your credentials</h4>

          <section>
            <div> <strong> Firstname: </strong> <label> ${createStaffDto.firstname} </label> </div>
            <div> <strong> Lastname: </strong> <label> ${createStaffDto.lastname} </label> </div>
            <div> <strong> Address: </strong> <label> ${createStaffDto.address} </label> </div>
            <div> <strong> Contact: </strong> <label> ${createStaffDto.contact} </label> </div>
            <div> <strong> Email: </strong> <label> ${createStaffDto.email} </label> </div>
            <div> <strong> Password: </strong> <label> ${password} </label> </div>
          </section>

          <p> please keep this credentials secure and dont share it to other people, Thank you!  </p>

          <small> - Zsackers cafe | ADMIN </small>
      </div>`,
      emailTo: newUser.email,
    };

    this.Smtp.sendEmail(smtp);

    return newUser;
  }

  findAll() {
    return `This action returns all staff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
