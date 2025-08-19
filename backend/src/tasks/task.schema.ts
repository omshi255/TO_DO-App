// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type TaskDocument = HydratedDocument<Task>;

// @Schema({ timestamps: true })
// export class Task {
//   @Prop({ required: true, trim: true })
//   title: string;

//   @Prop({ default: '', trim: true })
//   description?: string;

//   @Prop({ default: false })
//   completed: boolean;
// }

// export const TaskSchema = SchemaFactory.createForClass(Task);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, trim: true })
  title!: string;   

  @Prop({ default: '', trim: true })
  description?: string;

  @Prop({ default: false })
  completed!: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
