import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSizes1615120993034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sizes',
        columns: [
          {
            name: 'code',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sizes');
  }
}
