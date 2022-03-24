import {MigrationInterface, QueryRunner} from "typeorm";

export class fixPhoneCustomer1648143706188 implements MigrationInterface {
    name = 'fixPhoneCustomer1648143706188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" integer NOT NULL`);
    }

}
