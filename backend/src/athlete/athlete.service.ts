import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';

@Injectable()
export class AthleteService {
  constructor(private prisma: PrismaService) {}

  create(createAthleteDto: CreateAthleteDto) {
    return this.prisma.athlete.create({
      data: createAthleteDto,
    });
  }

  findAll() {
    return this.prisma.athlete.findMany();
  }

  findOne(id: string) {
    return this.prisma.athlete.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAthleteDto: UpdateAthleteDto) {
    return this.prisma.athlete.update({
      where: { id },
      data: updateAthleteDto,
    });
  }

  remove(id: string) {
    return this.prisma.athlete.delete({
      where: { id },
    });
  }
}
