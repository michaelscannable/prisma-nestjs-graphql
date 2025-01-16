import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUpdateManyMutationInput } from '../user/user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserWhereInput } from '../user/user-where.input';

@ArgsType()
export class UpdateManyUserAndReturnArgs {

    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: UserUpdateManyMutationInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
