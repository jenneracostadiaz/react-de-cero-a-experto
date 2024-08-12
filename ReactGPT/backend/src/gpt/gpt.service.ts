import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
    async orthographyCheck() {
        return await orthographyCheckUseCase(); hola: 'mundo desde el servicio'
    }
}
