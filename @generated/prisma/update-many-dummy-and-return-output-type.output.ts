import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UpdateManyDummyAndReturnOutputType {

    @Field(() => Int, {nullable:false})
    count!: number;
}
