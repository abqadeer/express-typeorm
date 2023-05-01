import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm'
import { Length, IsEmail, IsNotEmpty } from 'class-validator'
import { Exclude } from 'class-transformer'

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: string
    
    @Column()
    @Length(3, 100)
    @IsNotEmpty()
    name: string
    
    @Column({unique: true})
    @IsEmail()
    @IsNotEmpty()
    email: string
    
    @Column({select: false, })
    @Length(8, 20)
    @IsNotEmpty()
    @Exclude()
    password: string
}