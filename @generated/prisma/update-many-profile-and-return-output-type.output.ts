import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UpdateManyProfileAndReturnOutputType {

    @Field(() => Int, {nullable:false})
    count!: number;
}
