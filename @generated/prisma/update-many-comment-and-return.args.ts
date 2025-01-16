import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentUpdateManyMutationInput } from '../comment/comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentWhereInput } from '../comment/comment-where.input';

@ArgsType()
export class UpdateManyCommentAndReturnArgs {

    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: CommentUpdateManyMutationInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
