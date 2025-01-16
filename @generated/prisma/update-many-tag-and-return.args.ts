import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagUpdateManyMutationInput } from '../tag/tag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TagWhereInput } from '../tag/tag-where.input';

@ArgsType()
export class UpdateManyTagAndReturnArgs {

    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: TagUpdateManyMutationInput;

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;
}
