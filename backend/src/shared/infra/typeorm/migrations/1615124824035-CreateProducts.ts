import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateProducts1615124824035 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'sku',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'balance',
            type: 'INTEGER',
          },
          {
            name: 'category_code',
            type: 'varchar',
          },
          {
            name: 'color_code',
            type: 'varchar',
          },
          {
            name: 'model_code',
            type: 'varchar',
          },
          {
            name: 'size_code',
            type: 'varchar',
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
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductCategory',
        columnNames: ['category_code'],
        referencedTableName: 'categories',
        referencedColumnNames: ['code'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductColor',
        columnNames: ['color_code'],
        referencedTableName: 'colors',
        referencedColumnNames: ['code'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductModel',
        columnNames: ['model_code'],
        referencedTableName: 'models',
        referencedColumnNames: ['code'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductSize',
        columnNames: ['size_code'],
        referencedTableName: 'sizes',
        referencedColumnNames: ['code'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'ProductSize');
    await queryRunner.dropForeignKey('products', 'ProductModel');
    await queryRunner.dropForeignKey('products', 'ProductColor');
    await queryRunner.dropForeignKey('products', 'ProductCategory');
    await queryRunner.dropTable('products');
  }
}
