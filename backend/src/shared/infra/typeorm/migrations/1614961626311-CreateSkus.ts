import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSkus1614961626311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sku',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'integer',
          },
          {
            name: 'size_P',
            type: 'integer',
          },
          {
            name: 'size_M',
            type: 'integer',
          },
          {
            name: 'size_G',
            type: 'integer',
          },
          {
            name: 'size_GG',
            type: 'integer',
          },
          {
            name: 'colors',
            type: 'varchar',
          },
          {
            name: 'materials',
            type: 'varchar',
          },
          {
            name: 'product_id',
            type: 'varchar',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
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
        foreignKeys: [
          {
            name: 'ProductSku',
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            columnNames: ['product_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sku');
  }
}
